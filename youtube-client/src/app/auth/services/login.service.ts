import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public isUserAuthenticated = !!localStorage.getItem('authToken');
  public buttonLogoutClass = localStorage.getItem('authToken')
    ? 'login_button'
    : 'hidden';

  public logIn = () => {
    localStorage.setItem('authToken', '123456');
    this.isUserAuthenticated = true;
    this.buttonLogoutClass = 'login_button';
  };

  public logOut = () => {
    localStorage.removeItem('authToken');
    this.isUserAuthenticated = false;
    this.buttonLogoutClass = 'hidden';
  };
}
