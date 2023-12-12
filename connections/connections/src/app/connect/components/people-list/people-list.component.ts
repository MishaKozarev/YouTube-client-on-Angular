import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TimerService } from 'src/app/core/services/timer/timer.service';
import {
  getPeopleAction,
  updatePeopleAction
} from 'src/app/store/actions/people.actions';
import { PeopleItem } from 'src/app/store/models/people.models';
import { selectPeople } from 'src/app/store/selectors/people.selectors';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  public peopleList$!: Observable<PeopleItem[] | null> | undefined;
  public timerPeopleSubscription: Observable<number | null> | undefined;
  public timerName = 'timerUpdatePeoples';

  constructor(
    private store: Store,
    private timerService: TimerService
  ) {}
  ngOnInit(): void {
    this.peopleList$ = this.store.select(selectPeople);
    this.store.dispatch(getPeopleAction());
    this.timerPeopleSubscription = this.timerService.getTimer(this.timerName);
  }

  public updatePeople(): void {
    this.store.dispatch(updatePeopleAction());
  }
}
