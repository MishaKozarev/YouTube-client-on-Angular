import { TestBed } from '@angular/core/testing';

import { SortViewService } from './sort-view.service';

describe('SortViewService', () => {
  let service: SortViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
