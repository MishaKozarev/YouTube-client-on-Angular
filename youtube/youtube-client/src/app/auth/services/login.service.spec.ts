<<<<<<< HEAD
import { LoginService } from './login.service';

describe('LoginService', () => {
  let loginService: LoginService;

  beforeEach(() => {
    loginService = new LoginService();
  });

  it('should initialize with default values', () => {
    expect(loginService.isAuth.getValue());
  });

  it('should set user authorized', () => {
    loginService.login();
    expect(loginService.isAuth.getValue()).toBeTruthy();
  });

  it('should unset auth user and update button text on logout', () => {
    loginService.logout();
    expect(loginService.isAuth.getValue()).toBeFalsy();
  });

  it('should update localStorage on login', () => {
    loginService.login();
    expect(localStorage.getItem('authToken')).toBe('12345678');
  });

  it('should remove authToken from localStorage on logout', () => {
    loginService.logout();
    expect(localStorage.getItem('authToken')).toBeNull();
=======
import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
>>>>>>> main
  });
});
