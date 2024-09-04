import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authFundooGuard } from './auth-fundoo.guard';

describe('authFundooGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authFundooGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
