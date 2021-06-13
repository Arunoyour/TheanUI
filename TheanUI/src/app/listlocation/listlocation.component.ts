import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { NotificationService } from '../services/notification.service';
import { UserService } from '../services/user.service';
import { Router } from "@angular/router";
import { ConcatSource } from 'webpack-sources';

@Component({
  selector: 'app-listlocation',
  templateUrl: './listlocation.component.html',
  styleUrls: ['./listlocation.component.scss']
})
export class ListlocationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private apiService: UserService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private toastr: NotificationService) {
  }

  deliveryLocations: any;

  ngOnInit(): void {
    var userID = localStorage.getItem("CurrUser");
    if (userID !== null) {
      this.apiService.GetAllDeliveryLocation(userID).subscribe(data => {
        this.deliveryLocations = data["Data"]["Table"];
        console.log(this.deliveryLocations);
      })
    }
  }

  editLoc(loc: any) {
    localStorage.setItem("EditLocation", loc.AddressShortName);
    this.router.navigate(['updateDeliveryLocation']);
  }

  deleteLoc(loc: any) {
    alert("yet to implement");
  }

}
