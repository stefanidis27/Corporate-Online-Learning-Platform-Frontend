import { TestBed } from '@angular/core/testing';

import { SrvMainService } from './srv-main.service';

describe('SrvMainService', () => {
  let service: SrvMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
