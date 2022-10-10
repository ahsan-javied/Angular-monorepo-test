import { TestBed } from '@angular/core/testing';

import { LibBeehiveRGBService } from './lib-beehive-rgb.service';

describe('LibBeehiveRGBService', () => {
  let service: LibBeehiveRGBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibBeehiveRGBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
