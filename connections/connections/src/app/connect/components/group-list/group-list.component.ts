import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ThemeService } from 'src/app/core/services/theme/theme.service';
import { TimerService } from 'src/app/core/services/timer/timer.service';
import {
  createGroupAction,
  deleteGroupAction,
  getGroupAction,
  updateGroupList
} from 'src/app/store/actions/group.actions';
import { CustomGroup, GroupItem } from 'src/app/store/models/group.models';
import { selectGroup } from 'src/app/store/selectors/group.selectors';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit, OnDestroy {
  public groupList$: Observable<GroupItem[] | null> | undefined;
  public groupList!: GroupItem[];
  public timerGroupSubscription: Observable<number | null> | undefined;
  public groupNameForm!: FormGroup<{ nameGroup: FormControl }>;
  public currentUid!: string;
  public isShowForm = false;
  public isShowDeleteGroup = false;
  public errorMessage = 'Please enter a details';
  public timerName = 'timerUpdateGroup';
  private ngUnsubscribe$ = new Subject<void>();
  public currentTheme$: Observable<string> = this.themeService.stateTheme$;
  public currentTheme = localStorage.getItem('theme');

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private timerService: TimerService,
    private themeService: ThemeService
  ) {}
  ngOnInit(): void {
    this.initGroupList();

    this.getLocalStorageUid();

    this.groupNameForm = this.fb.group({
      nameGroup: [
        '',
        [
          Validators.required,
          Validators.maxLength(30),
          Validators.pattern(/^[a-zA-Z0-9 ]*$/)
        ]
      ]
    });
    this.timerGroupSubscription = this.timerService.getTimer(this.timerName);
    this.currentTheme$.subscribe((theme) => {
      this.currentTheme = theme;
    });
  }

  public initGroupList(): void {
    this.groupList$ = this.store.select(selectGroup);
    this.groupList$
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((groupsList) => {
        if (groupsList) {
          this.groupList = groupsList;
        }
      });
    if (!this.groupList.length) {
      this.store.dispatch(getGroupAction());
    }
  }

  get nameGroup() {
    return this.groupNameForm.get('nameGroup') as FormControl;
  }

  public showForm(): void {
    this.isShowForm = true;
  }

  public hideForm(): void {
    this.isShowForm = false;
    this.groupNameForm.reset();
  }

  private getLocalStorageUid(): void {
    const uidLocalStorage = localStorage.getItem('uid');
    if (uidLocalStorage) {
      this.currentUid = uidLocalStorage;
    }
  }

  public createGroup(): void {
    if (this.groupNameForm.status === 'VALID') {
      const newCustomGroup: CustomGroup = {
        name: this.groupNameForm.value.nameGroup,
        createdAt: new Date().toISOString(),
        createdBy: this.currentUid
      };
      this.store.dispatch(createGroupAction(newCustomGroup));
      this.isShowForm = false;
    }
  }

  public updateGroup() {
    this.store.dispatch(updateGroupList());
  }

  public deleteGroup() {
    this.isShowDeleteGroup = true;
  }

  public confirmDeleteGroup(groupID: string) {
    this.store.dispatch(deleteGroupAction({ groupID }));
    this.isShowDeleteGroup = false;
  }

  public noConfirmDeleteGroup() {
    this.isShowDeleteGroup = false;
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
