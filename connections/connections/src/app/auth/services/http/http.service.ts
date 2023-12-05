import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDataSignup } from '../../../connect/models/user-data';

export interface SignupParams {
  email: string;
  name: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly URL: string = 'https://tasks.app.rs.school/angular/registration';
  constructor(private http: HttpClient) {}

  public registration(userData: UserDataSignup) {
    return this.http.post(this.URL, userData);
  }
}
