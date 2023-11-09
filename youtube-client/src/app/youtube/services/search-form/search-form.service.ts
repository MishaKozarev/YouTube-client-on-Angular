import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, filter, switchMap } from 'rxjs';
import { ResponseService } from '../response/response.service';

interface IStateQuery {
  value: string,
  length: number
}
@Injectable({
  providedIn: 'root'
})
export class SearchFormService {
  constructor(private responseService: ResponseService ) {

  }

  private stateQuery: BehaviorSubject<IStateQuery>  = new BehaviorSubject({
    value: '',
    length: 0
  });

  public videos$ = this.stateQuery.asObservable()
    .pipe(
      filter(query => query.value.length > 3),
      debounceTime(1000),
      switchMap(query => this.responseService.getList(query.value, '6'))
    )

  public changeQuery(query: string, length: number) {
    this.stateQuery.next({value: query, length})
  }
}
