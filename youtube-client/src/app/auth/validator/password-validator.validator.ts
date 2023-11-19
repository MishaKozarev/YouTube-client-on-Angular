/* eslint-disable @typescript-eslint/quotes */
import { AbstractControl } from '@angular/forms';

export function validationPassword() {
  return (control: AbstractControl) => {
    let errorMessage = '';
    const errorEight = control.value.length > 8;
    const errorSpecialCharacter = control.value.match(
      /[[!@#$&*"'./|/\\+^`~_=]/
    );
    const errorLowercase = control.value.match(/[a-z]/);
    const errorCapital = control.value.match(/[A-Z]/);
    const errorNumber = control.value.match(/\d/);
    if (
      errorEight &&
      errorSpecialCharacter &&
      errorLowercase &&
      errorCapital &&
      errorNumber
    ) {
      return null;
    }
    if (control.value !== null && control.value !== '') {
      if (!errorEight) {
        errorMessage += 'must be at least 8 characters long, ';
      }
      if (!errorSpecialCharacter) {
        errorMessage +=
          'must contain at least one special character +!@#$%^&, ';
      }
      if (!errorLowercase) {
        errorMessage += 'must contain at least one lowercase letter, ';
      }
      if (!errorCapital) {
        errorMessage += 'must contain at least one capital letter, ';
      }
      if (!errorNumber) {
        errorMessage += 'must contain at least one number, ';
      }
    }
    return { validationPassword: true, errorMessage };
  };
}
