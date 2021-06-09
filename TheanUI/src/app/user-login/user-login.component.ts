import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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

  constructor(private formBuilder: FormBuilder,
    private apiService: UserService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private toastr: NotificationService) {

    this.addForm = this.formBuilder.group({
      email: [],
      mobileNumber: [],
      pwd: []
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    this.apiService.LoginUser(this.addForm.value)
      .subscribe(data => {
        console.log(data);
      });
  }

}
