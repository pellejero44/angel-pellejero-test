import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ImageJsonModule } from './components/image-json/image-json.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImageJsonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
