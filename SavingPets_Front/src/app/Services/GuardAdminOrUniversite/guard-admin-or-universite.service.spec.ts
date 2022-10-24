import { TestBed } from '@angular/core/testing';

import { GuardAdminOrUniversiteService } from './guard-admin-or-universite.service';

describe('GuardAdminOrUniversiteService', () => {
  let service: GuardAdminOrUniversiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardAdminOrUniversiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
