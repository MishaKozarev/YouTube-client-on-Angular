import { TestBed } from '@angular/core/testing';

import { SortWordService } from './sort-word.service';

describe('SortWordService', () => {
  let service: SortWordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortWordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
