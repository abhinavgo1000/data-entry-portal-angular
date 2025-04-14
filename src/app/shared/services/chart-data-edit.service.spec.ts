import { TestBed } from '@angular/core/testing';

import { ChartDataEditService } from './chart-data-edit.service';

describe('ChartDataEditService', () => {
  let service: ChartDataEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartDataEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
