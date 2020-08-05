import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageFilter'
})
export class ImageFilterPipe implements PipeTransform {

  transform(images: any, searchArgs: any): any {
    if(!images || !searchArgs || images[0].text === undefined 
      || images[0].id ===undefined || typeof searchArgs !== 'string')
      return images;
 
    return images.filter((image)=> 
            image.text.toLocaleLowerCase().indexOf(searchArgs.toLocaleLowerCase()) !== -1 ||
            image.id.toLocaleLowerCase().indexOf(searchArgs.toLocaleLowerCase()) !== -1 );
  }

}
