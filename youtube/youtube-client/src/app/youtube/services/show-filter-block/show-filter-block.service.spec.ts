import { TestBed } from '@angular/core/testing';

import { ShowFilterBlockService } from './show-filter-block.service';

describe('ShowFilterBlockService', () => {
  let service: ShowFilterBlockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowFilterBlockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should toggle showFilterBlock property', () => {
    expect(service.showFilterBlock).toBeFalsy();

    service.getIsShow();

    expect(service.showFilterBlock).toBeTruthy();

    service.getIsShow();

    expect(service.showFilterBlock).toBeFalsy();
  });
});
