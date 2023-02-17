import { TestBed } from '@angular/core/testing';

import { SeventythreestringsNavbarService } from './seventythreestrings-navbar.service';

describe('SeventythreestringsNavbarService', () => {
  let service: SeventythreestringsNavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeventythreestringsNavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
