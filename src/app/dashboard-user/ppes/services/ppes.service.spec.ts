import { TestBed } from '@angular/core/testing';

import { PpesService } from './ppes.service';

describe('PpesService', () => {
  let service: PpesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PpesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
