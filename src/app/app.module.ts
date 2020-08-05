import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
 import { FormsModule } from '@angular/forms';

import { ImageJSONComponent } from './components/image-json/image-json.component';
import { LazyLoadImagesModule } from './directives/lazyLoadImage/lazy-load-image.module';
import { ImageFilterPipe } from './pipes/image-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ImageJSONComponent,
    ImageFilterPipe
  ],
  imports: [
    BrowserModule,
    LazyLoadImagesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
