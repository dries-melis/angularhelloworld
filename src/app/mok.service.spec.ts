import { TestBed } from '@angular/core/testing';

import { MokService } from './mok.service';

describe('MokService', () => {
  let service: MokService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MokService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
