import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AddlocationComponent } from './addlocation/addlocation.component';
import { ListlocationComponent } from './listlocation/listlocation.component';
import { MedsnapshotComponent } from './medsnapshot/medsnapshot.component';

const routes: Routes = [
  { path: 'registration', component: UserRegistrationComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'resetpassword', component: ChangepasswordComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'addDeliveryLocation', component: AddlocationComponent},
  { path: 'updateDeliveryLocation', component: AddlocationComponent},
  { path: 'listDeliveryLocation', component: ListlocationComponent },
  { path: 'Medsnapshot',component:MedsnapshotComponent},
  { path: '**', redirectTo: '/registration'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
