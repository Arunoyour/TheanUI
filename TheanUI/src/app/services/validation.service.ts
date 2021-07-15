import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true }
    }

    return null;
  }

  static textOnly(control: AbstractControl): ValidationErrors | null {
    const nameRegexp: RegExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]/;

    if (control.value && nameRegexp.test(control.value)) {
      return { textOnly: true };
    }
    else {
      return null;
    }
  }

  static digitOnly(control: AbstractControl): ValidationErrors | null {
    const nameRegexp: RegExp = /^(0|[1-9]\d*)(\.\d+)?$/;

    if (control.value && !nameRegexp.test(control.value)) {
      return { digitOnly: true };
    }
    else {
      return null;
    }
  }
  static email(control: AbstractControl): ValidationErrors | null {
    const nameRegexp: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (control.value && !nameRegexp.test(control.value)) {
      return { email: true };
    }

    else {
      return null;
    }
  }
  static phone(control: AbstractControl): ValidationErrors | null {
    const nameRegexp: RegExp = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

    if (control.value && !nameRegexp.test(control.value)) {
      return { phone: true };
    }

    else {
      return null;
    }
  }  

}//class end tag
