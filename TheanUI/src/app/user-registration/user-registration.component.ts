import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { NotificationService } from '../services/notification.service';
import { UserService } from '../services/user.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private apiService: UserService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private toastr: NotificationService) {

    this.addForm = this.formBuilder.group({
      FullName: [],
      Email: [],
      MobileNumber: [],
      Pwd: [],
      crux:"00000000-0000-0000-0000-000000000000"
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    this.apiService.AddUser(this.addForm.value)
      .subscribe(data => {
        console.log(data);
      });
  }

}
