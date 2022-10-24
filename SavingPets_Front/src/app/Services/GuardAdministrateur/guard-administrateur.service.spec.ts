import { TestBed } from '@angular/core/testing';

import { GuardAdministrateurService } from './guard-administrateur.service';

describe('GuardAdministrateurService', () => {
  let service: GuardAdministrateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardAdministrateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
