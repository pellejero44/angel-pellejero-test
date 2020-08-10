import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { ImageJSONComponent } from './image-json.component';
import { FormsModule } from '@angular/forms';
import { ImageFilterPipe } from 'src/app/pipes/image-filter.pipe';
import { ImageJsonService } from 'src/app/services/image-json.service';

describe('ImageJSONComponent', () => {
  let component: ImageJSONComponent;
  let fixture: ComponentFixture<ImageJSONComponent>;
  let compiled: HTMLElement;
  let testBedImageJsonService:ImageJsonService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageJSONComponent,ImageFilterPipe],
      imports: [FormsModule],
      providers: [ImageJsonService]
    }).compileComponents();    
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ImageJSONComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    testBedImageJsonService = TestBed.get(ImageJsonService);
  }));

  it('should create ImageJSONComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should check the service', () => {
    expect(testBedImageJsonService instanceof ImageJsonService).toBeTruthy();
  });

  it('should inject the service using inject function and check its instance',
   inject([ImageJsonService], (injectedService: ImageJsonService)=>{
    expect(injectedService).toBeTruthy();
    expect(injectedService instanceof ImageJsonService).toBeTruthy();
   }));

  it('input should display the placeholder and his binding as undefined', () => {
    expect(component.searchedKeyword).toBeUndefined();
    expect(compiled.querySelector('input').getAttribute('placeholder'))
          .toEqual('Enter Keyword for filter result');
  });

  it('should add 4000 items to imagesJSON_List', () => {   
    expect(component.imageJSONList.length).toEqual(4000);
  });

  it('if the method createJSON is called this calls once ImageJsonService`s getJSON method', () => {   
    spyOn(testBedImageJsonService, 'getJSON').and.returnValue(component.imageJSONList);
    component.createJSON();
    expect(testBedImageJsonService.getJSON).toHaveBeenCalledTimes(1);
  });

  it('after detect changes should display 4000 images on the container', () => {
    expect(compiled.querySelectorAll('img').length).toEqual(4000);
  });

  it('should display total number of images is lower than 4000 after write in the input 180', () => {
    component.searchedKeyword='180';
    fixture.detectChanges();
    expect(compiled.querySelectorAll('img').length).toBeLessThan(4000);
  });

});
