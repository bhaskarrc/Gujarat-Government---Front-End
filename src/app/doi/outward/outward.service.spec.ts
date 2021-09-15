import { TestBed, inject } from '@angular/core/testing';

import { OutwardService } from './outward.service';

describe('OutwardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OutwardService]
    });
  });

  it('should be created', inject([OutwardService], (service: OutwardService) => {
    expect(service).toBeTruthy();
  }));
});
