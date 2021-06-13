import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { NotificationService } from '../services/notification.service';
import { UserService } from '../services/user.service';
import { Router } from "@angular/router";
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {

  addForm: FormGroup;

  isError: boolean = false;
  isSuccess: boolean = false;
  message: string = '';

  constructor(private formBuilder: FormBuilder,
    private apiService: UserService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private toastr: NotificationService) {

    this.addForm = this.formBuilder.group({
      pEmailId: [],
      pPhoneNo: [],
      pOldPass: [],
      pNewPass: []
    });
  }

  get f() {
    return this.addForm.controls;
  }

  ngOnInit() {

  }

  onSubmit() {
    this.apiService.ResetPassword(this.addForm.value)
      .subscribe(data => {
        console.log(data);
      });
  }

}
