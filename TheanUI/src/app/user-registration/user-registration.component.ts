import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { NotificationService } from '../services/notification.service';
import { UserService } from '../services/user.service';
import { Router } from "@angular/router";
import { ValidationService } from '../services/validation.service';
import { validate } from 'json-schema';
import { Constants } from '../shared/constants';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  //AppConstants: Constants;

  addForm: FormGroup;
  cnfPassword: any;

  isError: boolean = false;
  isSuccess: boolean = false;
  message: string = '';

  get f() {
    return this.addForm.controls;
  }

  AppConstants: any;

  constructor(private formBuilder: FormBuilder,
    private apiService: UserService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private toastr: NotificationService) {

    this.AppConstants = Constants;

    this.addForm = this.formBuilder.group({
      FullName: ['', [Validators.required, ValidationService.textOnly]],
      Email: ['', [Validators.required, ValidationService.email]],
      MobileNumber: ['', [Validators.required, ValidationService.phone]],
      Pwd: ['', [Validators.required]],
      crux: "00000000-0000-0000-0000-000000000000"
    });

  }

  ngOnInit() {

  }

  onSubmit() {
    if (this.addForm.valid) {
      if (this.addForm.controls['Pwd'].value !== this.cnfPassword) {
        this.isError = true;
        this.message = "Password and Confirm password should match";
      }
      else {
        this.apiService.AddUser(this.addForm.value)
          .subscribe(data => {
            this.router.navigate(['EmailVerify']);
          });
      }
    } else {
      this.isError = true;
      this.message = "Invalid Form";
    }
  }

}
