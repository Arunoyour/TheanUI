import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../services/user.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-emailverify',
  templateUrl: './emailverify.component.html',
  styleUrls: ['./emailverify.component.scss']
})
export class EmailverifyComponent implements OnInit {
  txtEmailOTP:any="";
  txtMobOTP:any="";

  constructor(
    private apiService: UserService,
    private router: Router,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
  }
  Submit() {
    let guid:string=localStorage.getItem("CurrUser");
    let EmailStatus= this.apiService.VerifyUser(guid,this.txtEmailOTP,"email");
    let SMSStatus= this.apiService.VerifyUser(guid,this.txtEmailOTP,"phone");
    alert("submitted");
    this.router.navigate(['Landing']);
  }
  Resend() {
    alert("Resend");
  }
}
