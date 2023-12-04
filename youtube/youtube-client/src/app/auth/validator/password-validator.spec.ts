import { AbstractControl } from '@angular/forms';

import { validationPassword } from './password-validator.validator';

describe('validationPassword', () => {
  it('should return validation error object for a password without lowercase letters', () => {
    const control = { value: 'UPPERCASE123!' } as AbstractControl;
    const validatorFn = validationPassword();
    const result = validatorFn(control);
    expect(result).toEqual({
      validationPassword: true,
      errorMessage: 'must contain at least one lowercase letter, '
    });
  });
});
