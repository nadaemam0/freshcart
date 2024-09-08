import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(product:any[]): any[] {
    return product.filter((x)=>x.count>0)
  }

}
