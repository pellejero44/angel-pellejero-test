import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageJSONComponent } from './image-json.component';
import { ImageFilterPipe } from 'src/app/pipes/image-filter.pipe';
import { ImageJsonService } from 'src/app/services/image-json.service';
import { LazyLoadImagesModule } from 'src/app/directives/lazyLoadImage/lazy-load-image.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    LazyLoadImagesModule
  ],
  exports: [
    ImageJSONComponent
  ],
  declarations: [
    ImageJSONComponent,
    ImageFilterPipe
  ],
  providers:[ImageJsonService]
})
export class ImageJsonModule { }
 