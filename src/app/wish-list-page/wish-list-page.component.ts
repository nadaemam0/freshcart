import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { WishList } from '../wish-list';
import { CartServiveService } from '../shared/services/cart-servive.service';

@Component({
  selector: 'app-wish-list-page',
  templateUrl: './wish-list-page.component.html',
  styleUrls: ['./wish-list-page.component.css']
})
export class WishListPageComponent implements OnInit {

  allWishItems:WishList={} as WishList
  constructor(private _ProductsService:ProductsService , private _CartServiveService:CartServiveService){

  }
  ngOnInit(): void {
    this.getWishList()
  }

  getWishList(){
  this._ProductsService.getWishList().subscribe({
  next:(res)=>{
    console.log(res);
    this.allWishItems=res
    
  }
})
  }

  removeFromWishList(id:string){
    this._ProductsService.removeFromWishList(id).subscribe({
      next:(res)=>{
        console.log(res);
        this.allWishItems=res
      }
    })
  }

  addProductToCart(id:string){
    this._CartServiveService.addProductToCart(id).subscribe({
      next:(res)=>{
        console.log(res);
      }
    })
  }
}
