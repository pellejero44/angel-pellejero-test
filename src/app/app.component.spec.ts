import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ImageJSONComponent } from './components/image-json/image-json.component';
import { FormsModule } from '@angular/forms';
import { ImageFilterPipe } from './pipes/image-filter.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, ImageJSONComponent,ImageFilterPipe],
      imports: [FormsModule],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'A.Pellejero.Test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('A.Pellejero.Test');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.toolbar span').textContent).toContain('Pellejero');
  });

  it('should create the nested component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-image-json')).not.toBeNull();
  });

});
