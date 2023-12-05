import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastMessagesService {
  private toastMessageSubject = new Subject<{
    message: string;
    isSuccess: boolean;
  }>();

  public toastMessage$ = this.toastMessageSubject.asObservable();

  public showToastMessage(message: string, isSuccess: boolean) {
    this.toastMessageSubject.next({ message, isSuccess });
  }
}
