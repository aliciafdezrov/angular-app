import { Pipe, PipeTransform } from '@angular/core';
import {PhotoEntity} from "../model/photoEntity";

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {

  transform(photos: PhotoEntity[], start: number, end: number): PhotoEntity[] {
    return photos.slice(start, end);
  }
}
