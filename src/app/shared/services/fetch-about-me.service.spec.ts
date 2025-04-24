import { TestBed } from '@angular/core/testing';

import { FetchAboutMeService } from './fetch-about-me.service';

describe('FetchAboutMeService', () => {
  let service: FetchAboutMeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchAboutMeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
