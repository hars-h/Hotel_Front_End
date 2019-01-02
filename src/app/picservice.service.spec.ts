import { TestBed } from '@angular/core/testing';

import { PicserviceService } from './picservice.service';

describe('PicserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PicserviceService = TestBed.get(PicserviceService);
    expect(service).toBeTruthy();
  });
});
