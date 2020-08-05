import { Pipe, PipeTransform } from '@angular/core';
import { ImageJSON } from '../models/imageJsSON-model';

@Pipe({
  name: 'imageFilter'
})
export class ImageFilterPipe implements PipeTransform {

  transform(images: ImageJSON [], searchArgs: any): ImageJSON [] {
    if(!images || !searchArgs)
      return images;
    return images.filter((image)=> 
            image.text.toLocaleLowerCase().indexOf(searchArgs.toLocaleLowerCase()) !== -1 ||
            image.id.toLocaleLowerCase().indexOf(searchArgs.toLocaleLowerCase()) !== -1 );
  }

}
