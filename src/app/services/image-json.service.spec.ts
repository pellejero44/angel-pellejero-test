import { TestBed } from '@angular/core/testing';

import { ImageJsonService } from './image-json.service';

describe('ImageJsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageJsonService = TestBed.get(ImageJsonService);
    expect(service).toBeTruthy();
  });
});
