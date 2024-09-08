import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Products } from '../products';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartServiveService } from '../shared/services/cart-servive.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})


export class ProductDetailsComponent implements OnInit{

  likedProductsArray:string[]=[]
  productId:string=''
  productDetails:Products={} as Products;
  isLiked:boolean=false

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },

    },
    nav: true
  }
  constructor(private _activatedRoute:ActivatedRoute ,
     private _ProductsService:ProductsService ,
    private _cartServive:CartServiveService){

    this._activatedRoute.paramMap.subscribe((res:any)=>{   
    this.productId=res.params.id
    })
  
    this._ProductsService.getProductById(this.productId).subscribe({
      next:(res)=>{
        this.productDetails=res.data

      }
    })
  }

  ngOnInit() {
    const storedLikedProducts = localStorage.getItem('likedProducts');
  
    if (storedLikedProducts !== null) {
      const likedProducts: string[] = JSON.parse(storedLikedProducts) || [];
  
      this.isLiked = likedProducts.includes(this.productId);
    }
    }
  

  addProductToCart(id:string){
    this._cartServive.addProductToCart(id).subscribe({
      next:(res)=>{
        console.log(res);
        
      }
    })
  }

  addToWishList(id: string) {
    if (this.isLiked) {
      this._ProductsService.removeFromWishList(id).subscribe({
        next: (res) => {
          console.log(res);
          this.isLiked = false;
  
          const storedLikedProducts = localStorage.getItem('likedProducts');
          if (storedLikedProducts !== null) {
            let likedProducts: string[] = JSON.parse(storedLikedProducts) || [];
            const index = likedProducts.indexOf(id);
            if (index !== -1) {
              likedProducts.splice(index, 1);
            }
            localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
          }
        }
      });
    } else {
      this._ProductsService.addToWishList(id).subscribe({
        next: (res) => {
          console.log(res);
          this.isLiked = true;
  
          const storedLikedProducts = localStorage.getItem('likedProducts');
          if (storedLikedProducts !== null) {
            let likedProducts: string[] = JSON.parse(storedLikedProducts) || [];
            if (!likedProducts.includes(id)) {
              likedProducts.push(id);
            }
            localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
          }
        }
      });
    }
  }
  
}