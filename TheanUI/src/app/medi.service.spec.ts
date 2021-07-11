import { TestBed } from '@angular/core/testing';

import { MediService } from './services/medi.service';

describe('MediService', () => {
  let service: MediService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
