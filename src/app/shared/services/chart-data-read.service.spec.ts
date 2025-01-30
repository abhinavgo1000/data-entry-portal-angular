import { TestBed } from '@angular/core/testing';

import { ChartDataReadService } from './chart-data-read.service';

describe('ChartDataReadService', () => {
  let service: ChartDataReadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartDataReadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
