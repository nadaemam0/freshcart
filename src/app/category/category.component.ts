import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Category } from '../category';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  allCategory:Category[]=[]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    margin:20,
    dots: false,
    navSpeed: 700,
    navText: ['prev', 'next'],
    responsive: {
      0: {
        items: 8
      },

    },
    nav: true
  }
  
  constructor(private _productsService:ProductsService){

  }

  ngOnInit(): void {
    this.getCategory()
    
  }
    
  getCategory(){
    this._productsService.getCategory().subscribe({
      next:(res)=>{
        this.allCategory=res.data                

      }
    })

  }

}
