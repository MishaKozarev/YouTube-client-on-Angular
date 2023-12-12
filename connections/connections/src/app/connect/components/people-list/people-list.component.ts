import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  public peopleList$: Observable<null> | undefined;
  public timerSubscription: Observable<number | null> | undefined;
  ngOnInit(): void {
    this.peopleList$ = undefined;
  }

  public updatePeople(): void {
    this.peopleList$ = undefined;
  }
}
