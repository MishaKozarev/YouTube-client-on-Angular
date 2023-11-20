import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  debounceTime,
  filter,
  map,
  Observable,
  switchMap
} from 'rxjs';

import { Item } from '../../models/search-item.model';
import { ResponseService } from '../response/response.service';

interface IStateQuery {
  value: string;
  length: number;
}
@Injectable({
  providedIn: 'root'
})
export class SearchFormService {
  constructor(private responseService: ResponseService) {}

  private stateQuery: BehaviorSubject<IStateQuery> = new BehaviorSubject({
    value: '',
    length: 0
  });

  public videos$: Observable<Item[]> = this.stateQuery.asObservable().pipe(
    filter((query) => query.value.length >= 3),
    debounceTime(1000),
    switchMap((query) => this.responseService.getList(query.value, '10')),
    map((item) => item.items)
  );

  public changeQuery(query: string, length: number): void {
    this.stateQuery.next({ value: query, length });
  }
}
