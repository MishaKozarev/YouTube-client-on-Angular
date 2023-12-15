import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  getGroupMessageAction,
  sendGroupMessageAction
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
export class GroupDetailsComponent implements OnInit {
  public groupMessageForm!: FormGroup<{ groupMessage: FormControl }>;
  public groupMessage$ = this.store.select(selectGroupMessage);
  public timerGroupSubscription: Observable<number | null> | undefined;
  public peopleList$!: Observable<PeopleItem[]>;
  public peopleList!: PeopleItem[];

  public currentId = '';
  public peopleItem!: PeopleItem[];

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.currentId = params['groupID'];
    });
    this.store.dispatch(getGroupMessageAction({ groupID: this.currentId }));

    this.groupMessageForm = this.fb.group({
      groupMessage: ['', [Validators.required]]
    });
    this.peopleList$ = this.store.select(selectPeople);
    this.peopleList$.subscribe((peoples) => {
      if (peoples) {
        this.peopleList = peoples;
      }
    });
    this.store.dispatch(getPeopleAction());
  }

  get groupMessage() {
    return this.groupMessageForm.get('groupMessage') as FormControl;
  }

  public updateMessage() {}

  public createMessage() {
    localStorage.setItem(
      'groupMessage',
      this.groupMessageForm.value.groupMessage
    );
    const message = {
      groupID: this.currentId,
      message: this.groupMessageForm.value.groupMessage
    };
    this.store.dispatch(sendGroupMessageAction(message));
    this.groupMessageForm.reset();
  }
}
