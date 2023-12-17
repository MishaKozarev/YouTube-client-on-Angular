import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  HTTP_PEOPLE_MESSAGE,
  HTTP_PEOPLE_MESSAGE_SEND
} from 'src/app/constant/http-people-conversation';
import { PeopleMessage } from 'src/app/store/models/people-message.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleMessageService {
  private readonly httpPeopleMessage = HTTP_PEOPLE_MESSAGE;
  private readonly httpPeopleMessageSend = HTTP_PEOPLE_MESSAGE_SEND;

  constructor(private http: HttpClient) {}

  public sendPeopleMessageRequest(conversationID: string) {
    const headers = {
      'rs-uid': localStorage.getItem('uid') || '',
      'rs-email': localStorage.getItem('email') || '',
      Authorization: `Bearer ${localStorage.getItem('token') || ''}`
    };
    const params = new HttpParams().set('conversationID', conversationID);

    return this.http.get<PeopleMessage>(this.httpPeopleMessage, {
      headers,
      params
    });
  }

  public sendPeopleSendNewMessageRequest(
    conversationID: string,
    message: string
  ) {
    const headers = {
      'rs-uid': localStorage.getItem('uid') || '',
      'rs-email': localStorage.getItem('email') || '',
      Authorization: `Bearer ${localStorage.getItem('token') || ''}`
    };
    const body = { conversationID, message };

    return this.http.post(this.httpPeopleMessageSend, body, { headers });
  }
}
