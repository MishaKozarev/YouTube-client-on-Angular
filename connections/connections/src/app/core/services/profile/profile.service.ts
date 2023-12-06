import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_PROFILE } from 'src/app/constant/http-profile';

import { ProfileData } from '../../models/profile-data';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private readonly httpProfile = URL_PROFILE;
  constructor(private http: HttpClient) {}

  public sendProfileRequest(): Observable<ProfileData> {
    const token = localStorage.getItem('token') || '';
    const uid = localStorage.getItem('uid') || '';
    const email = localStorage.getItem('email') || '';
    const headers = {
      'rs-uid': uid,
      'rs-email': email,
      Authorization: `Bearer ${token}`
    };
    return this.http.get<ProfileData>(this.httpProfile, { headers });
  }
}
