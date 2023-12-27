import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTP_PEOPLE_LIST } from 'src/app/constant/http-people';
import { People } from 'src/app/store/models/people.models';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private readonly httpPeopleList = HTTP_PEOPLE_LIST;

  constructor(private http: HttpClient) {}

  public sendPeopleListRequest(): Observable<People> {
    const headers = {
      'rs-uid': localStorage.getItem('uid') || '',
      'rs-email': localStorage.getItem('email') || '',
      Authorization: `Bearer ${localStorage.getItem('token') || ''}`
    };
    return this.http.get<People>(this.httpPeopleList, { headers });
  }
}
