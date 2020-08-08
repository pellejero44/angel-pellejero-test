import { TestBed, async } from '@angular/core/testing';

import { ImageJsonService } from './image-json.service';

fdescribe('ImageJsonService', () => {

  let testBedImageJsonService:ImageJsonService;
  
  beforeEach(async() => TestBed.configureTestingModule({}));
  
  beforeEach(async(() => {
    testBedImageJsonService = TestBed.get(ImageJsonService);
  }));

  it('should be created', () => {
    expect(testBedImageJsonService).toBeTruthy();
  });

  it('should return a JSON with 4000 items', () => {
    expect(testBedImageJsonService.getJSON().length).toEqual(4000);
  });

  it('if the method getJSON is called, this calls 4000 times getRandomText method', () => {
    spyOn(testBedImageJsonService, 'getRandomText');
    testBedImageJsonService.getJSON()
    expect(testBedImageJsonService.getRandomText).toHaveBeenCalledTimes(4000);
  });
});
