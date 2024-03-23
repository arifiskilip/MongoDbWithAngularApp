import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'productSearchPipe',
  standalone: true
})
export class ProductSearchPipe implements PipeTransform {

  transform(value: Product[], searchText: string): Product[] {
    if(searchText == null){
      return value;
    }
    else{
      return value.filter(x=>x.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
    }
  }

}
