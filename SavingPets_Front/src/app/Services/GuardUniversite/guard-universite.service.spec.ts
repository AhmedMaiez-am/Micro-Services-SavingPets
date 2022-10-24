import { TestBed } from '@angular/core/testing';

import { GuardUniversiteService } from './guard-universite.service';

describe('GuardUniversiteService', () => {
  let service: GuardUniversiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardUniversiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
