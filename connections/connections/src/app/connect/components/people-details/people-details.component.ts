import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getPeopleMessageAction } from 'src/app/store/actions/people-message.actions';
import { selectPeopleMessage } from 'src/app/store/selectors/people-message.selectors';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {
  public peopleMessage$ = this.store.select(selectPeopleMessage);
  public currentPeopleId = '';

  constructor(
    private store: Store,
    private routeActive: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.routeActive.params.subscribe((params) => {
      this.currentPeopleId = params['conversationID'];
    });
    this.store.dispatch(
      getPeopleMessageAction({ conversationID: this.currentPeopleId })
    );
  }
}
