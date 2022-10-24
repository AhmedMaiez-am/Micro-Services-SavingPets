import { TestBed } from '@angular/core/testing';

import { GuardVisitorService } from './guard-visitor.service';

describe('GuardVisitorService', () => {
  let service: GuardVisitorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardVisitorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
