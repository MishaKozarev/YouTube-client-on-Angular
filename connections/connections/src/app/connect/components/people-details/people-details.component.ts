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
import {
  getPeopleMessageAction,
  sendPeopleMessageAction
} from 'src/app/store/actions/people-message.actions';
import { PeopleItem } from 'src/app/store/models/people.models';
import { selectPeople } from 'src/app/store/selectors/people.selectors';
import { selectPeopleMessage } from 'src/app/store/selectors/people-message.selectors';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {
  public peopleMessageForm!: FormGroup<{ peopleMessage: FormControl }>;
  public peopleMessage$ = this.store.select(selectPeopleMessage);
  public currentPeopleId = '';
  public uid = localStorage.getItem('uid');
  public timerPeopleSubscription: Observable<number | null> | undefined;
  public peopleList$!: Observable<PeopleItem[]>;
  public peopleList!: PeopleItem[];
  public isShowDeletePeopleDialog: boolean = false;

  constructor(
    private store: Store,
    private route: Router,
    private routeActive: ActivatedRoute,
    private fb: FormBuilder
  ) {}
  public ngOnInit(): void {
    this.routeActive.params.subscribe((params) => {
      this.currentPeopleId = params['conversationID'];
    });
    this.store.dispatch(
      getPeopleMessageAction({ conversationID: this.currentPeopleId })
    );

    this.peopleMessageForm = this.fb.group({
      peopleMessage: ['', [Validators.required]]
    });

    this.peopleList$ = this.store.select(selectPeople);
    this.peopleList$.subscribe((peoples) => {
      if (peoples) {
        this.peopleList = peoples;
      }
    });
  }

  public get peopleMessage() {
    return this.peopleMessageForm.get('peopleMessage') as FormControl;
  }

  public deletePeopleDialog(): void {
    this.isShowDeletePeopleDialog = true;
  }
  public updateMessage(): void {
    this.isShowDeletePeopleDialog = false;
  }
  public createMessage(): void {
    localStorage.setItem(
      'currentMessage',
      this.peopleMessageForm.value.peopleMessage
    );
    const message = {
      conversationID: this.currentPeopleId,
      message: this.peopleMessageForm.value.peopleMessage
    };
    this.store.dispatch(sendPeopleMessageAction(message));
    this.peopleMessageForm.reset();
  }
  public confirmDeletePeopleDialog(peopleId: string): void {
    this.route.navigate(['/']);
  }
  public noConfirmDeletePeopleDialog(): void {
    this.isShowDeletePeopleDialog = false;
  }
}
