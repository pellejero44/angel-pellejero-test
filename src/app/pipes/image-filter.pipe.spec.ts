import { ImageFilterPipe } from './image-filter.pipe';
import { ImageJSON } from '../models/imageJsSON-model';

describe('ImageFilterPipe', () => {
    let pipe: ImageFilterPipe;

    beforeEach(() => {
        pipe = new ImageFilterPipe();
    });

    it('create an instance', () => {
      expect(pipe).toBeTruthy();
    });

    it('return the same list if the "term" is invalid', () => {
      const list = [
        new ImageJSON("1","https://picsum.photos/id/1/500/500", "Cras quis tincidunt mi"),
        new ImageJSON("2","https://picsum.photos/id/1/500/500", "Duis feugiat enim vel augue varius consectetur"),
        new ImageJSON("3","https://picsum.photos/id/2/500/500", "Cras quis tincidunt mi")
      ];
      expect(pipe.transform(list, null)).toBe(list);
      expect(pipe.transform(list, undefined)).toBe(list);
      expect(pipe.transform(null, undefined)).toBe(null);
      expect(pipe.transform(undefined, undefined)).toBe(undefined);
      expect(pipe.transform(list, ["","_"])).toBe(list);
      expect(pipe.transform(list, new Date)).toBe(list);
    });

    it('return the same list if the "list" is invalid', () => {
      const dateList = [ new Date(), new Date()];
      expect(pipe.transform(null, 'hello')).toBe(null);
      expect(pipe.transform(undefined, 'hello')).toBe(undefined);      
      expect(pipe.transform(dateList, '1')).toBe(dateList);
      expect(pipe.transform('_', 'hello')).toBe('_');
    });

    it('filter the array if the "terms" are valid', () => {
      const list = [
        new ImageJSON("1","https://picsum.photos/id/1/500/500", "Cras quis tincidunt mi"),
        new ImageJSON("2","https://picsum.photos/id/1/500/500", "Duis feugiat enim vel augue varius consectetur"),
        new ImageJSON("3","https://picsum.photos/id/2/500/500", "Cras quis tincidunt mi")
      ];
      expect(pipe.transform(list, 'd')).toEqual(list);
      expect(pipe.transform(list, 'Cras')).toEqual([
        new ImageJSON("1","https://picsum.photos/id/1/500/500", "Cras quis tincidunt mi"),
        new ImageJSON("3","https://picsum.photos/id/2/500/500", "Cras quis tincidunt mi")
      ]);
      expect(pipe.transform(list, 'hello')).toEqual([]);
      expect(pipe.transform(list, '2')).toEqual([new ImageJSON("2","https://picsum.photos/id/1/500/500", "Duis feugiat enim vel augue varius consectetur")]);
  });

});

