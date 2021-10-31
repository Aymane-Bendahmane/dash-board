import { TestBed } from '@angular/core/testing';

import { MarqueService } from './services.service';

describe('ServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarqueService = TestBed.get(MarqueService);
    expect(service).toBeTruthy();
  });
});
