import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageJSONComponent } from './image-json.component';
import { FormsModule } from '@angular/forms';
import { ImageFilterPipe } from 'src/app/pipes/image-filter.pipe';

describe('ImageJSONComponent', () => {
  let component: ImageJSONComponent;
  let fixture: ComponentFixture<ImageJSONComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageJSONComponent,ImageFilterPipe],
      imports: [FormsModule]
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ImageJSONComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  }));

  it('should create ImageJSONComponent', () => {
    expect(component).toBeTruthy();
  });

  it('input should display the placeholder and his binding as undefined', () => {
    expect(component.searchedKeyword).toBeUndefined();
    expect(compiled.querySelector('input').getAttribute('placeholder'))
          .toEqual('Enter Keyword for filter result');
  });

  it('should add 4000 items to imagesJSON_List', () => {    
    expect(component.imageJSON_List.length).toEqual(4000);
  });

  it('after detect changes should display 4000 images rendered', () => {
    expect(compiled.querySelectorAll('img').length).toEqual(4000);
  });

  it(`should display total number of images is lower than 4000 after write in the input 180`, () => {
    component.searchedKeyword='180';
    fixture.detectChanges();
    expect(compiled.querySelectorAll('img').length).toBeLessThan(4000);
  });

});
