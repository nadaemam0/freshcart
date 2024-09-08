import { Pipe, PipeTransform } from '@angular/core';
import { Products } from './products';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(products:Products[],searchKey:string):Products[] {
    return products.filter((ele)=>ele.title.toLowerCase().includes(searchKey.toLowerCase()))
  }

}
