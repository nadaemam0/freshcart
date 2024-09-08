import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit{

  allSubCategory:any=[]
  catId:string=''
  constructor(private _productsService:ProductsService , private _activatedRoute:ActivatedRoute){
    
    this._activatedRoute.paramMap.subscribe((res:any)=>{   
      this.catId=res.params.id})
  }


  ngOnInit(): void {
    this.getSubCategory(this.catId)
  }

  getSubCategory(id:string){
    this._productsService.getSubCategory(id).subscribe({
      next:(res)=>{
        this.allSubCategory=res.data
        console.log(this.allSubCategory);
        
      }
    })
  }
}
