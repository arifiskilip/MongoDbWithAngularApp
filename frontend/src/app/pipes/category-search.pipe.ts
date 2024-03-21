import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../models/category';

@Pipe({
  name: 'categorySearchPipe',
  standalone: true
})
export class CategorySearchPipe implements PipeTransform {

  transform(value: Category[], search: string): Category[] {
    if(search==null){
      return value;
    }

    return value?.filter(x=> x.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  }

}
