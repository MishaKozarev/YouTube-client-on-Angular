/* eslint-disable @typescript-eslint/quotes */
import { FormControl } from '@angular/forms';

export function validationPassword(control: FormControl) {
  if (control.value !== null && control.value !== '') {
    if (control.value.length < 8) {
      return {
        validationPassword: {
          value: true,
          errorMessage:
            "Password isn't strong enough: must be at least 8 characters long"
        }
      };
    }
    if (!control.value.match(/[[!@#$&*"'./|/\\+^`~_=]/)) {
      return {
        validationPassword: {
          value: true,
          errorMessage:
            "Password isn't strong enough: must contain at least one special character +!@#$%^&"
        }
      };
    }
    if (!control.value.match(/[a-z]/)) {
      return {
        validationPassword: {
          value: true,
          errorMessage:
            "Password isn't strong enough: must contain at least one lowercase letter"
        }
      };
    }
    if (!control.value.match(/[A-Z]/)) {
      return {
        validationPassword: {
          value: true,
          errorMessage:
            "Password isn't strong enough: must contain at least one capital letter"
        }
      };
    }
    if (!control.value.match(/\d/)) {
      return {
        validationPassword: {
          value: true,
          errorMessage:
            "Password isn't strong enough: must contain at least one number"
        }
      };
    }
  }
  return null;
}
