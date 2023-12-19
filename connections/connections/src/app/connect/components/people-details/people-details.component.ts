import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TimerService } from 'src/app/core/services/timer/timer.service';
import { deletePeopleConversationAction } from 'src/app/store/actions/people-conversation.actions';
import {
  getPeopleMessageAction,
  sendPeopleMessageAction,
  updatePeopleMessageAction
} from 'src/app/store/actions/people-message.actions';
import { PeopleItem } from 'src/app/store/models/people.models';
import { PeopleMessageItem } from 'src/app/store/models/people-message.model';
import { selectPeople } from 'src/app/store/selectors/people.selectors';
import { selectPeopleMessage } from 'src/app/store/selectors/people-message.selectors';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {
  public peopleMessageForm!: FormGroup<{ peopleMessageControl: FormControl }>;
  public peopleMessage$: Observable<PeopleMessageItem[]> | undefined;
  public currentPeopleId = '';
  public uid = localStorage.getItem('uid');
  public timerPeopleSubscription: Observable<number | null> | undefined;
  public timerName = 'timerUpdatePeopleMessage';
  public peopleList$!: Observable<PeopleItem[]>;
  public peopleList!: PeopleItem[];
  public isShowDeletePeopleDialog: boolean = false;

  constructor(
    private store: Store,
    private route: Router,
    private routeActive: ActivatedRoute,
    private timerService: TimerService,
    private fb: FormBuilder
  ) {}
  public ngOnInit(): void {
    this.routeActive.params.subscribe((params) => {
      this.currentPeopleId = params['conversationID'];
    });
    this.initPeopleMessage();

    this.peopleMessageForm = this.fb.group({
      peopleMessageControl: ['', [Validators.required]]
    });

    this.initPeopleList();
    this.timerPeopleSubscription = this.timerService.getTimer(this.timerName);
  }

  public initPeopleList(): void {
    this.peopleList$ = this.store.select(selectPeople);
    this.peopleList$.subscribe((peoples) => {
      if (peoples) {
        this.peopleList = peoples;
      }
    });
  }

  public initPeopleMessage() {
    this.peopleMessage$ = this.store.select(selectPeopleMessage);
    this.store.dispatch(
      getPeopleMessageAction({ conversationID: this.currentPeopleId })
    );
  }

  public get peopleMessageControl() {
    return this.peopleMessageForm.get('peopleMessageControl') as FormControl;
  }

  public updateMessage(): void {
    this.store.dispatch(
      updatePeopleMessageAction({ conversationID: this.currentPeopleId })
    );
  }

  public createMessage(): void {
    localStorage.setItem(
      'currentMessage',
      this.peopleMessageForm.value.peopleMessageControl
    );
    const message = {
      conversationID: this.currentPeopleId,
      message: this.peopleMessageForm.value.peopleMessageControl
    };
    this.store.dispatch(sendPeopleMessageAction(message));
    this.peopleMessageForm.reset();
  }

  public deletePeopleDialog(): void {
    this.isShowDeletePeopleDialog = true;
  }

  public confirmDeletePeopleDialog(conversationID: string): void {
    this.store.dispatch(deletePeopleConversationAction({ conversationID }));
    this.route.navigate(['/']);
  }

  public noConfirmDeletePeopleDialog(): void {
    this.isShowDeletePeopleDialog = false;
  }
}
