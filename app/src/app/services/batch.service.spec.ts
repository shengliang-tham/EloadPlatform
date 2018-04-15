import { TestBed, inject } from '@angular/core/testing';

import { BatchService } from './batch.service';

describe('GenerateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BatchService]
    });
  });

  it('should be created', inject([BatchService], (service: BatchService) => {
    expect(service).toBeTruthy();
  }));
});
