import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { MatSelectModule,MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { NgxSpinnerModule } from "ngx-spinner";  
import { ToastrModule } from 'ngx-toastr';
import { UserLoginComponent } from './user-login/user-login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ListlocationComponent } from './listlocation/listlocation.component';
import { AddlocationComponent } from './addlocation/addlocation.component';
import { EmailverifyComponent } from './emailverify/emailverify.component';
import { LandingComponent } from './landing/landing.component';
import { MedsnapshotComponent } from './medsnapshot/medsnapshot.component';
import { HeyautoComponent } from './heyauto/heyauto.component';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { InsuranceComponent } from './insurance/insurance.component';
import { AnydelvryComponent } from './anydelvry/anydelvry.component';

import {ConnectionServiceModule} from 'ng-connection-service'; 


@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    ForgotpasswordComponent,
    ChangepasswordComponent,
    AddlocationComponent,
    MedsnapshotComponent,
    EmailverifyComponent,
    LandingComponent,
    HeyautoComponent,
    ListlocationComponent,
    InsuranceComponent,
    AnydelvryComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    DlDateTimeDateModule,  // <--- Determines the data type of the model
    DlDateTimePickerModule,

    ConnectionServiceModule  
  ],
  providers: [
    {provide : LocationStrategy , useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
