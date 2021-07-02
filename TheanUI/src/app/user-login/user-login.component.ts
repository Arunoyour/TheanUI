import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { NotificationService } from '../services/notification.service';
import { UserService } from '../services/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  addForm: FormGroup;
  isChecked: string = "";

  isError: boolean = false;
  isSuccess: boolean = false;
  message: string = '';

  constructor(private formBuilder: FormBuilder,
    private apiService: UserService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private toastr: NotificationService) {

    this.addForm = this.formBuilder.group({
      Email: [],
      pwd: [],
      rememberMe: new FormControl(false)
    });
  }

  ngOnInit() {
    var guid = this.rememberMe();
    if (guid != undefined) {
      console.log("correct");
      console.log(guid);
      this.afterSuccessfulLogin();
    }
  }

  onSubmit() {
    console.log(this.addForm.value);
    this.apiService.LoginUser(this.addForm.value)
      .subscribe(data => {
        console.log(data);
        if (data["Data"] == "Invalid UserName" || data["Data"] == "Invalid Password") {
          this.isError = true;
          this.message = "Invalid credentials";
        }
        else if (data["Data"].indexOf("EmailId") > -1) {
          this.router.navigate(['EmailVerify']);
        }
        else {
          if (this.addForm.controls["rememberMe"].value == true) {
            var object = { value: data["Data"], timestamp: new Date().getTime() }
            localStorage.setItem("RemMe", JSON.stringify(object));
            console.log(data);
          }
          localStorage.setItem("CurrUser", data["Data"]);
          this.afterSuccessfulLogin();
        }
      });
  }

  rememberMe() {
    var rememberDetails = localStorage.getItem("RemMe");
    if (rememberDetails != null) {
      var object = JSON.parse(rememberDetails),
        value = object.value,
        dateString = object.timestamp,
        now = new Date().getTime();
      var diff = (now - dateString);
      var duration = this.durationCalc(diff);
      if (duration > 2) {
        localStorage.removeItem("RemMe");
        localStorage.removeItem("CurrUser");
        return null;
      }
      else {
        localStorage.setItem("CurrUser", value);
        return value;
      }
    } else {
      localStorage.removeItem("CurrUser");
    }
  }

  afterSuccessfulLogin() {
    var user = localStorage.getItem("CurrUser");
    if (user != null) {
      this.apiService.GetAllDeliveryLocation(user).subscribe(loc => {
        var sLocations = loc["Data"]["Table"].length;
        if (sLocations > 0) {
          this.router.navigate(['listDeliveryLocation']);
        } else {
          this.router.navigate(['addDeliveryLocation']);
        }
      });
    }
  }

  durationCalc(ms: any) {
    var days = Math.floor(ms / (24 * 60 * 60 * 1000));
    var daysms = ms % (24 * 60 * 60 * 1000);
    var hours = Math.floor((daysms) / (60 * 60 * 1000));
    var hoursms = ms % (60 * 60 * 1000);
    var minutes = Math.floor((hoursms) / (60 * 1000));
    var minutesms = ms % (60 * 1000);
    var sec = Math.floor((minutesms) / (1000));
    //return days + ":" + hours + ":" + minutes + ":" + sec;
    return (hoursms) / (60 * 1000);
  }
}
