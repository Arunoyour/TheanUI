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

  static alphaNumeric(control: AbstractControl): ValidationErrors | null {
    const nameRegexp: RegExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    if (control.value && nameRegexp.test(control.value)) {
      return { alphaNumeric: true };
    }
    else {
      return null;
    }
  }

}//class end tag
