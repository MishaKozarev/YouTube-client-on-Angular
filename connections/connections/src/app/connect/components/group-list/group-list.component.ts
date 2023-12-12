import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TimerService } from 'src/app/core/services/timer/timer.service';
import {
  createGroupAction,
  deleteGroupAction,
  getGroupAction,
  updateGroupList
} from 'src/app/store/actions/group.action';
import { CustomGroup, GroupItem } from 'src/app/store/models/group.models';
import { selectGroup } from 'src/app/store/selectors/group.selectors';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {
  public groupList$: Observable<GroupItem[] | null> | undefined;
  public timerSubscription: Observable<number | null> | undefined;
  public groupNameForm!: FormGroup<{ nameGroup: FormControl }>;
  public currentUid!: string;
  public isShowForm = false;
  public errorMessage = 'Please enter a details';
  public timerName = 'timerUpdateGroup';


  constructor(
    private store: Store,
    private fb: FormBuilder,
    private timerService: TimerService
  ) {}
  ngOnInit(): void {
    this.groupList$ = this.store.select(selectGroup);
    this.store.dispatch(getGroupAction());
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
    this.timerSubscription = this.timerService.getTimer(this.timerName);
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
    }
  }

  public deleteGroup(groupID: string) {
    this.store.dispatch(deleteGroupAction({ groupID }));
  }

  public updateGroup() {
    this.store.dispatch(updateGroupList());
  }
}
