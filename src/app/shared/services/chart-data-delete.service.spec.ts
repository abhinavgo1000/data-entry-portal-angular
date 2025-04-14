import { TestBed } from '@angular/core/testing';

import { ChartDataDeleteService } from './chart-data-delete.service';

describe('ChartDataDeleteService', () => {
  let service: ChartDataDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartDataDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
