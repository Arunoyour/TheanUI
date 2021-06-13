import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

const routes: Routes = [
  { path: 'registration', component: UserRegistrationComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'resetpassword', component: ChangepasswordComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  {path: '**', redirectTo: '/registration'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
