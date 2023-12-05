import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { ToastMessagesService } from '../../services/toast-messages.service';

@Component({
  selector: 'app-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.scss']
})
export class ToastMessageComponent implements OnInit, OnDestroy {
  public toastMessage = '';
  public isResponseSuccess = false;
  private ngUnsubscribe$ = new Subject<void>();

  constructor(private toastMessagesService: ToastMessagesService) {}
  public ngOnInit(): void {
    this.toastMessagesService.toastMessage$
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe(({ message, isSuccess }) => {
        this.toastMessage = message;
        this.isResponseSuccess = isSuccess;
        setTimeout(() => {
          this.toastMessage = '';
          this.isResponseSuccess = false;
        }, 4000);
      });
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
