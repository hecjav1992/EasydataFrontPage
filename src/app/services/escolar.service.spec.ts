import { TestBed } from '@angular/core/testing';

import { EscolarService } from './escolar.service';

describe('EscolarService', () => {
  let service: EscolarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EscolarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
