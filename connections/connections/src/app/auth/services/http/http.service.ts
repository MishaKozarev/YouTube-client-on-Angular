import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SIGNUP } from 'src/app/constant/http-signup';

import { UserDataSignup } from '../../models/user-data';

export interface SignupParams {
  email: string;
  name: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly urlSignup: string = URL_SIGNUP;
  constructor(private http: HttpClient) {}

  public sendSignupRequest(userData: UserDataSignup) {
    return this.http.post(this.urlSignup, userData);
  }
}
