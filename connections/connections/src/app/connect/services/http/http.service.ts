import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDataSignup } from '../../models/user-data';


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
