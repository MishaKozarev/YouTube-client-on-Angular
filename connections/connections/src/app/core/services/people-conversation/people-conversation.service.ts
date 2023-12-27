import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HTTP_PEOPLE_CONVERSATION_DELETE,
  HTTP_PEOPLE_CONVERSATIONS_CREATE,
  HTTP_PEOPLE_CONVERSATIONS_LIST
} from 'src/app/constant/http-people-conversation';
import {
  ConversationID,
  PeopleConversationsList
} from 'src/app/store/models/people-conversation.models';
import { PeopleDialogCreateById } from 'src/app/store/models/people-message.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleConversationService {
  private readonly httpPeopleConversationsList = HTTP_PEOPLE_CONVERSATIONS_LIST;
  private readonly httpPeopleConversationsCreate =
    HTTP_PEOPLE_CONVERSATIONS_CREATE;
  private readonly httpPeopleConversationDelete =
    HTTP_PEOPLE_CONVERSATION_DELETE;

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

  public sendDeletePeopleDialogRequest(conversationID: PeopleDialogCreateById) {
    const headers = {
      'rs-uid': localStorage.getItem('uid') || '',
      'rs-email': localStorage.getItem('email') || '',
      Authorization: `Bearer ${localStorage.getItem('token') || ''}`
    };
    const params = new HttpParams().set(
      'conversationID',
      conversationID.conversationID
    );
    return this.http.delete(this.httpPeopleConversationDelete, {
      headers,
      params
    });
  }
}
