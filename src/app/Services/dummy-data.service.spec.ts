import { TestBed, inject } from '@angular/core/testing';

import { DummyDataService } from './dummy-data.service';

describe('DummyDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DummyDataService]
    });
  });

  it('should be created', inject([DummyDataService], (service: DummyDataService) => {
    expect(service).toBeTruthy();
  }));
});
