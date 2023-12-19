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
import { ThemeService } from 'src/app/core/services/theme/theme.service';
import { TimerService } from 'src/app/core/services/timer/timer.service';
import { deleteGroupAction } from 'src/app/store/actions/group.actions';
import {
  getGroupMessageAction,
  sendGroupMessageAction,
  updateGroupMessageAction
} from 'src/app/store/actions/group-message.actions';
import { getPeopleAction } from 'src/app/store/actions/people.actions';
import { GroupItem } from 'src/app/store/models/group.models';
import { GroupMessageItem } from 'src/app/store/models/group-message.models';
import { PeopleItem } from 'src/app/store/models/people.models';
import { selectGroup } from 'src/app/store/selectors/group.selectors';
import { selectGroupMessage } from 'src/app/store/selectors/group-message.selectors';
import { selectPeople } from 'src/app/store/selectors/people.selectors';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetailsComponent implements OnInit, OnDestroy {
  public groupList$: Observable<GroupItem[] | null> | undefined;
  public groupList!: GroupItem[];
  public groupMessageForm!: FormGroup<{ groupMessageControl: FormControl }>;
  public groupMessage$: Observable<GroupMessageItem[]> | undefined;
  public groupMessage!: GroupMessageItem[];
  public timerGroupSubscription: Observable<number | null> | undefined;
  public peopleList$!: Observable<PeopleItem[]>;
  public peopleList!: PeopleItem[];
  public timerName = 'timerUpdateGroupMessage';
  public currentId = '';
  public uid = localStorage.getItem('uid');
  public isShowDeleteGroup: boolean = false;
  private ngUnsubscribe$ = new Subject<void>();
  public currentTheme$: Observable<string> = this.themeService.stateTheme$;
  public currentTheme = localStorage.getItem('theme');
  public isMyGroup!: boolean;

  constructor(
    private store: Store,
    private route: Router,
    private routeActive: ActivatedRoute,
    private timerService: TimerService,
    private fb: FormBuilder,
    private themeService: ThemeService
  ) {}
  ngOnInit(): void {
    this.initPeopleList();
    this.routeActive.params.subscribe((params) => {
      this.currentId = params['groupID'];
    });
    this.initMessage();

    this.groupMessageForm = this.fb.group({
      groupMessageControl: ['', [Validators.required]]
    });
    this.timerGroupSubscription = this.timerService.getTimer(this.timerName);
    this.currentTheme$.subscribe((theme) => {
      this.currentTheme = theme;
    });

    this.groupList$ = this.store.select(selectGroup);
    this.groupList$.subscribe((groups) => {
      if (groups?.length) {
        const currentGroup = groups.find(
          (group) => group.id.S === this.currentId
        );
        if (currentGroup) {
          this.isMyGroup =
            currentGroup.createdBy.S === localStorage.getItem('uid');
        }
      }
    });
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

  public initMessage(): void {
    this.groupMessage$ = this.store.select(selectGroupMessage);
    this.groupMessage$
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((groupMessage) => {
        if (groupMessage) {
          this.groupMessage = groupMessage;
        }
      });
    this.store.dispatch(getGroupMessageAction({ groupID: this.currentId }));
  }

  get groupMessageControl() {
    return this.groupMessageForm.get('groupMessageControl') as FormControl;
  }

  public updateMessage(): void {
    this.store.dispatch(updateGroupMessageAction({ groupID: this.currentId }));
  }

  public createMessage(): void {
    localStorage.setItem(
      'currentMessage',
      this.groupMessageForm.value.groupMessageControl
    );
    const message = {
      groupID: this.currentId,
      message: this.groupMessageForm.value.groupMessageControl
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
