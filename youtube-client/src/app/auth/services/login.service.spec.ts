import { LoginService } from './login.service';

describe('LoginService', () => {
  let loginService: LoginService;

  beforeEach(() => {
    loginService = new LoginService();
  });

  it('should initialize with default values', () => {
    expect(loginService.isAuth.getValue());
  });

  it('should set auth user and update button text on login', () => {
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
  });
});
