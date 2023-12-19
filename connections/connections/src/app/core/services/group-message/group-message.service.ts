import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  HTTP_GROUP_MESSAGE,
  HTTP_GROUP_MESSAGE_SEND
} from 'src/app/constant/http-group-message';
import { GroupMessage } from 'src/app/store/models/group-message.models';

@Injectable({
  providedIn: 'root'
})
export class GroupMessageService {
  private readonly httpGroupMessage = HTTP_GROUP_MESSAGE;
  private readonly httpGroupMessageSend = HTTP_GROUP_MESSAGE_SEND;

  constructor(private http: HttpClient) {}

  public sendGroupMessageRequest(groupId: string, since?: number) {
    const headers = {
      'rs-uid': localStorage.getItem('uid') || '',
      'rs-email': localStorage.getItem('email') || '',
      Authorization: `Bearer ${localStorage.getItem('token') || ''}`
    };
    const params = since
      ? new HttpParams().set('groupID', groupId).set('since', since)
      : new HttpParams().set('groupID', groupId);

    return this.http.get<GroupMessage>(this.httpGroupMessage, {
      headers,
      params
    });
  }

  public sendGroupSendNewMessageRequest(groupID: string, message: string) {
    const headers = {
      'rs-uid': localStorage.getItem('uid') || '',
      'rs-email': localStorage.getItem('email') || '',
      Authorization: `Bearer ${localStorage.getItem('token') || ''}`
    };
    const body = { groupID, message };

    return this.http.post(this.httpGroupMessageSend, body, { headers });
  }
}
