import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AddlocationComponent } from './addlocation/addlocation.component';
import { ListlocationComponent } from './listlocation/listlocation.component';
import { EmailverifyComponent } from './emailverify/emailverify.component';
import { LandingComponent } from './landing/landing.component';
import { MedsnapshotComponent } from './medsnapshot/medsnapshot.component';
import { HeyautoComponent } from './heyauto/heyauto.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { AnydelvryComponent } from './anydelvry/anydelvry.component';
import { AtmComponent } from './atm/atm.component';
import { RentDriverComponent } from './rent-driver/rent-driver.component';
import { DelAnythingComponent } from './del-anything/del-anything.component';



const routes: Routes = [
  { path: 'registration', component: UserRegistrationComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'resetpassword', component: ChangepasswordComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'addDeliveryLocation', component: AddlocationComponent},
  { path: 'updateDeliveryLocation', component: AddlocationComponent},
  { path: 'listDeliveryLocation', component: ListlocationComponent },
  { path: 'EmailVerify', component: EmailverifyComponent },
  { path: 'Landing', component: LandingComponent },
  { path: 'Medsnapshot',component:MedsnapshotComponent},
  { path: 'Heyauto',component:HeyautoComponent},
  { path: 'Insurance',component:InsuranceComponent},
  { path: 'AnydelvryComponent',component:AnydelvryComponent},
  { path: 'atm',component:AtmComponent},
  { path: 'RentDriver',component:RentDriverComponent},
  { path: 'Delanything',component:DelAnythingComponent},
  { path: '**', redirectTo: '/registration'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
