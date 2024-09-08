import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../products';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {

  allProducts:Products[]=[]
  searchKey:string=""
  constructor(private _productsService:ProductsService){

  }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(){
    this._productsService.getProducts().subscribe({
      next:(res)=>{
        console.log(res);
        this. allProducts= res.data
        
      }
    })
  }
}
