import { TestBed } from '@angular/core/testing';

import { ImagecrudService } from './imagecrud.service';

describe('ImagecrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImagecrudService = TestBed.get(ImagecrudService);
    expect(service).toBeTruthy();
  });
});
