import { TestBed, inject } from '@angular/core/testing';

import { InwardService } from './inward.service';

describe('InwardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InwardService]
    });
  });

  it('should be created', inject([InwardService], (service: InwardService) => {
    expect(service).toBeTruthy();
  }));
});
