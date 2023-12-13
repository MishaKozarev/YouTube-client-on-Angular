import { TestBed } from '@angular/core/testing';

import { PeopleConversationService } from './people-conversation.service';

describe('PeopleConversationService', () => {
  let service: PeopleConversationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleConversationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
