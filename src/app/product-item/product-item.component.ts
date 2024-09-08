import { Component, Input } from '@angular/core';
import { Products } from '../products';
import { CartServiveService } from '../shared/services/cart-servive.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() product:Products={} as Products
constructor(private _cartServive:CartServiveService){}

addProductToCart(id:string){
  this._cartServive.addProductToCart(id).subscribe({
    next:(res)=>{
      console.log(res);
      
    }
  })
}
}
