import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { TimerService } from 'src/app/core/services/timer/timer.service';
import { deleteGroupAction } from 'src/app/store/actions/group.actions';
import {
  getGroupMessageAction,
  sendGroupMessageAction,
  updateGroupMessageAction
} from 'src/app/store/actions/group-message.actions';
import { getPeopleAction } from 'src/app/store/actions/people.actions';
import { PeopleItem } from 'src/app/store/models/people.models';
import { selectGroupMessage } from 'src/app/store/selectors/group-message.selectors';
import { selectPeople } from 'src/app/store/selectors/people.selectors';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetailsComponent implements OnInit, OnDestroy {
  public groupMessageForm!: FormGroup<{ groupMessage: FormControl }>;
  public groupMessage$ = this.store.select(selectGroupMessage);
  public timerGroupSubscription: Observable<number | null> | undefined;
  public peopleList$!: Observable<PeopleItem[]>;
  public peopleList!: PeopleItem[];
  public timerName = 'timerUpdateGroupMessage';
  public currentId = '';
  public uid = localStorage.getItem('uid');
  public isShowDeleteGroup: boolean = false;
  private ngUnsubscribe$ = new Subject<void>();

  constructor(
    private store: Store,
    private route: Router,
    private routeActive: ActivatedRoute,
    private timerService: TimerService,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.initPeopleList();
    this.routeActive.params.subscribe((params) => {
      this.currentId = params['groupID'];
    });
    this.store.dispatch(getGroupMessageAction({ groupID: this.currentId }));

    this.groupMessageForm = this.fb.group({
      groupMessage: ['', [Validators.required]]
    });
    this.timerGroupSubscription = this.timerService.getTimer(this.timerName);
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

  get groupMessage() {
    return this.groupMessageForm.get('groupMessage') as FormControl;
  }

  public updateMessage(): void {
    this.store.dispatch(updateGroupMessageAction({ groupID: this.currentId }));
  }

  public createMessage(): void {
    localStorage.setItem(
      'currentMessage',
      this.groupMessageForm.value.groupMessage
    );
    const message = {
      groupID: this.currentId,
      message: this.groupMessageForm.value.groupMessage
    };
    this.store.dispatch(sendGroupMessageAction(message));
    this.groupMessageForm.reset();
  }

  public deleteGroup(): void {
    this.isShowDeleteGroup = true;
  }

  public confirmDeleteGroup(groupID: string): void {
    this.store.dispatch(deleteGroupAction({ groupID }));
    this.route.navigate(['/']);
  }

  public noConfirmDeleteGroup(): void {
    this.isShowDeleteGroup = false;
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
