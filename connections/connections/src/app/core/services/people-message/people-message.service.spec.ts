import { TestBed } from '@angular/core/testing';

import { PeopleMessageService } from './people-message.service';

describe('PeopleMessageService', () => {
  let service: PeopleMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
