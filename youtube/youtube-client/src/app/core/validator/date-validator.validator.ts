import { FormControl } from '@angular/forms';

export function validationDate(control: FormControl) {
  if (control.value !== null) {
    const date = control.value.split('-');
    if (!(new Date(date.join('-')) < new Date())) {
      return {
        validationDate: {
          value: true,
          errorMessage: 'The date is not valid'
        }
      };
    }
  }
  return null;
}
