import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ImageJSONComponent } from './components/image-json/image-json.component';
import { FormsModule } from '@angular/forms';
import { ImageFilterPipe } from './pipes/image-filter.pipe';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, ImageJSONComponent,ImageFilterPipe],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'A.Pellejero.Test'`, () => {
    expect(component.title).toEqual('A.Pellejero.Test');
  });

  it('should render title', () => {
    expect(compiled.querySelector('.toolbar span').textContent).toContain('Pellejero');
  });

  it('should create the nested component', () => {
    expect(compiled.querySelector('app-image-json')).not.toBeNull();
  });

});
