import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { filtroGuard } from './filtro.guard';

describe('filtroGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => filtroGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
