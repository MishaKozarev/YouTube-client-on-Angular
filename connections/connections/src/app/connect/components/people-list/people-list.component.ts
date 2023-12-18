import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { TimerService } from 'src/app/core/services/timer/timer.service';
import {
  getPeopleAction,
  updatePeopleAction
} from 'src/app/store/actions/people.actions';
import {
  createPeopleConversationAction,
  getPeopleConversationAction
} from 'src/app/store/actions/people-conversation.actions';
import { PeopleItem } from 'src/app/store/models/people.models';
import { CompanionsItem } from 'src/app/store/models/people-conversation.models';
import { selectPeople } from 'src/app/store/selectors/people.selectors';
import { selectPeopleConversation } from 'src/app/store/selectors/people-conversation.selectors';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit, OnDestroy {
  public peopleList$!: Observable<PeopleItem[] | null>;
  public peopleList!: PeopleItem[];
  public peopleConversationList$!: Observable<CompanionsItem[]>;
  public peopleConversationList: CompanionsItem[] | [] = [];
  public timerPeopleSubscription: Observable<number | null> | undefined;
  public timerName = 'timerUpdatePeoples';
  private ngUnsubscribe$ = new Subject<void>();

  constructor(
    private store: Store,
    private router: Router,
    private timerService: TimerService
  ) {}
  ngOnInit(): void {
    this.initPeopleList();
    this.initPeopleConversationList();
    this.timerPeopleSubscription = this.timerService.getTimer(this.timerName);
  }

  public initPeopleList(): void {
    this.peopleList$ = this.store.select(selectPeople);
    this.peopleList$
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((peopleList) => {
        if (peopleList) {
          this.peopleList = peopleList;
        }
      });
    if (!this.peopleList.length) {
      // eslint-disable-next-line @ngrx/avoid-dispatching-multiple-actions-sequentially
      this.store.dispatch(getPeopleAction());
    }
  }

  public initPeopleConversationList() {
    this.peopleConversationList$ = this.store.select(selectPeopleConversation);
    this.peopleConversationList$
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((conversationList) => {
        if (conversationList) {
          this.peopleConversationList = conversationList;
        }
      });
    if (!this.peopleConversationList.length) {
      // eslint-disable-next-line @ngrx/avoid-dispatching-multiple-actions-sequentially
      this.store.dispatch(getPeopleConversationAction());
    }
  }

  public updatePeople(): void {
    this.store.dispatch(updatePeopleAction());
  }

  public openPeopleConversation(companion: string): void {
    const currentCompanion =
      this.peopleConversationList.find(
        (item) => item.companionID.S === companion
      ) || null;
    if (currentCompanion) {
      this.router.navigate(['conversation', currentCompanion.id.S]);
    } else {
      this.store.dispatch(createPeopleConversationAction({ companion }));
    }
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
