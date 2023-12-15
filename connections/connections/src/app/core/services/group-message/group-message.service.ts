import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP_GROUP_MESSAGE } from 'src/app/constant/http-group-message';
import { GroupMessage } from 'src/app/store/models/group-message.models';

@Injectable({
  providedIn: 'root'
})
export class GroupMessageService {
  private readonly httpGroupMessage = HTTP_GROUP_MESSAGE;

  constructor(private http: HttpClient) {}

  public sendGroupMessageRequest(groupId: string) {
    const headers = {
      'rs-uid': localStorage.getItem('uid') || '',
      'rs-email': localStorage.getItem('email') || '',
      Authorization: `Bearer ${localStorage.getItem('token') || ''}`
    };
    const params = new HttpParams().set('groupID', groupId);

    return this.http.get<GroupMessage>(this.httpGroupMessage, {
      headers,
      params
    });
  }
}
