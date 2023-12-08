import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_PROFILE } from 'src/app/constant/http-profile';
import {
  EMAIL_LOCAL_STORAGE,
  TOKEN_LOCAL_STORAGE,
  UID_LOCAL_STORAGE
} from 'src/app/constant/local-storage-data';

import { UserProfile, UserProfileName } from '../../models/profile-data';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private readonly httpProfile = URL_PROFILE;
  private readonly token = TOKEN_LOCAL_STORAGE || '';
  private readonly uid = UID_LOCAL_STORAGE || '';
  private readonly email = EMAIL_LOCAL_STORAGE || '';

  constructor(private http: HttpClient) {}

  public sendProfileRequest(): Observable<UserProfile> {
    const headers = {
      'rs-uid': this.uid,
      'rs-email': this.email,
      Authorization: `Bearer ${this.token}`
    };
    return this.http.get<UserProfile>(this.httpProfile, { headers });
  }

  public sendChangeProfileNameRequest(name: UserProfileName) {
    const headers = {
      'rs-uid': this.uid,
      'rs-email': this.email,
      Authorization: `Bearer ${this.token}`
    };
    return this.http.put<UserProfile>(this.httpProfile, name, { headers });
  }
}
