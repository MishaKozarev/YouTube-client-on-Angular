<<<<<<< HEAD
import { SortService } from './sort.service';

describe('SortDateService', () => {
  let sortService: SortService;

  beforeEach(() => {
    sortService = new SortService();
  });

  it('should sortByDate be true or false', () => {
    expect(sortService.ascendDate).toBeTruthy();
    expect(sortService.isSortDate).toBeFalsy();
  });

  it('should sortByView be true or false', () => {
    expect(sortService.ascendView).toBeTruthy();
    expect(sortService.isSortView).toBeFalsy();
=======
import { TestBed } from '@angular/core/testing';

import { SortService } from './sort.service';

describe('SortDateService', () => {
  let service: SortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
>>>>>>> main
  });
});
