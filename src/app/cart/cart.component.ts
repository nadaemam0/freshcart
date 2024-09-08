import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartServiveService } from '../shared/services/cart-servive.service';
import { Cart } from '../shared/services/cart';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartDetails:Cart={} as Cart
  constructor(private _CartServiveService:CartServiveService){}

  ngOnInit(): void {
    this.getCart()
  }

  getCart(){
    this._CartServiveService.getCart().subscribe({
      next:(res)=>{
        this.cartDetails=res
      },
      error:(err)=>{
        console.log(err);
        
      }

    })
  }
  updateCartCount(count:number,id:string){
    this._CartServiveService.updateCartCount(count,id).subscribe({
      next:(res)=>{
        this.cartDetails=res
      }
    })
  }

  removeProduct(id:string){
    this._CartServiveService.removeProduct(id).subscribe({
      next:(res)=>{
        console.log(res);
        this.cartDetails=res
      }
    })
  }

}
