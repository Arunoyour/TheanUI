import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { NotificationService } from '../services/notification.service';
import { AppConstants } from '../shared/AppConstants';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,
  private toastr:NotificationService) { }

  ngOnInit() {
    setTimeout(() => {
      this.spinner.show();
    }, 1000);

    setTimeout(() => {
      this.spinner.hide();
    }, 3000);

    setTimeout(() => {
      this.toastr.showSuccess("success", "success");
      this.toastr.showSuccess(AppConstants.baseURL, "Baseurl");
      this.toastr.showError("Error", "Error");
      this.toastr.showInfo("Info", "Info");
      this.toastr.showWarning("Warn", "Warn");
    }, 4000);
  }

}
