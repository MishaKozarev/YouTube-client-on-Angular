import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HTTP_PEOPLE_CONVERSATIONS_CREATE,
  HTTP_PEOPLE_CONVERSATIONS_LIST
} from 'src/app/constant/http-people-conversation';
import {
  ConversationID,
  PeopleConversationsList
} from 'src/app/store/models/people-conversation.models';

@Injectable({
  providedIn: 'root'
})
export class PeopleConversationService {
  private readonly httpPeopleConversationsList = HTTP_PEOPLE_CONVERSATIONS_LIST;
  private readonly httpPeopleConversationsCreate =
    HTTP_PEOPLE_CONVERSATIONS_CREATE;

  constructor(private http: HttpClient) {}

  public sendPeopleConversationListRequest(): Observable<PeopleConversationsList> {
    const headers = {
      'rs-uid': localStorage.getItem('uid') || '',
      'rs-email': localStorage.getItem('email') || '',
      Authorization: `Bearer ${localStorage.getItem('token') || ''}`
    };
    return this.http.get<PeopleConversationsList>(
      this.httpPeopleConversationsList,
      { headers }
    );
  }

  public sendCreatePeopleConversationRequest(
    companion: string
  ): Observable<ConversationID> {
    const headers = {
      'rs-uid': localStorage.getItem('uid') || '',
      'rs-email': localStorage.getItem('email') || '',
      Authorization: `Bearer ${localStorage.getItem('token') || ''}`
    };
    return this.http.post<ConversationID>(
      this.httpPeopleConversationsCreate,
      { companion },
      { headers }
    );
  }
}
