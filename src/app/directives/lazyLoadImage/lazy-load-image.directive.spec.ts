import { Component } from '@angular/core';
import { async } from '@angular/core/testing';

@Component({
    selector: 'app-test-container',
    template: `
                <div class="image-list imageContainer" lazy-load-images>
                    <div *ngFor="let imageJSON of imageJSON_List | imageFilter: searchedKeyword">
                        <div class="row">
                            <div class="col-xl-6 col-sl-12">
                                <img [attr.data-src]='imageJSON.photo' class="imgJSON">
                            </div>
                            <div class="col-xl-6 col-sl-12">
                                <p class="figure-caption">{{imageJSON.text}}</p>
                            </div>
                        </div>
                    </div>
                </div>
    `
  })
  class ContainerComponent { }
  
describe('LazyLoadImagesDirective', () => {

    const observeMock = {
        observe: () => null,
        disconnect: () => null 
      };

      beforeEach(async(() => {
        (<any> window).IntersectionObserver = () => observeMock;

      }));
});
