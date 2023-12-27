import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_LOGOUT, URL_PROFILE } from 'src/app/constant/http-profile';
import {
  UserProfile,
  UserProfileName
} from 'src/app/store/models/profile.models';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private readonly httpProfile = URL_PROFILE;
  private readonly httpLogout = URL_LOGOUT;

  constructor(private http: HttpClient) {}

  public sendProfileRequest(): Observable<UserProfile> {
    const headers = {
      'rs-uid': localStorage.getItem('uid') || '',
      'rs-email': localStorage.getItem('email') || '',
      Authorization: `Bearer ${localStorage.getItem('token') || ''}`
    };
    return this.http.get<UserProfile>(this.httpProfile, { headers });
  }

  public sendChangeProfileNameRequest(name: UserProfileName) {
    const headers = {
      'rs-uid': localStorage.getItem('uid') || '',
      'rs-email': localStorage.getItem('email') || '',
      Authorization: `Bearer ${localStorage.getItem('token') || ''}`
    };
    return this.http.put<UserProfile>(this.httpProfile, name, { headers });
  }

  public sendDeleteProfileRequest() {
    const headers = {
      'rs-uid': localStorage.getItem('uid') || '',
      'rs-email': localStorage.getItem('email') || '',
      Authorization: `Bearer ${localStorage.getItem('token') || ''}`
    };
    return this.http.delete<UserProfile>(this.httpLogout, { headers });
  }
}
