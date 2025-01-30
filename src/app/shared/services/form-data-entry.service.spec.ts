import { TestBed } from '@angular/core/testing';

import { FormDataEntryService } from './form-data-entry.service';

describe('FormDataEntryService', () => {
  let service: FormDataEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormDataEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
