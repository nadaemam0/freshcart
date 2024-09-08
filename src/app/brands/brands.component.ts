import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Brands } from '../brands';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  allBrands:Brands= {} as Brands
  constructor(private _ProductsService:ProductsService){

  }

  ngOnInit(): void {
    this.getBrands()
  }

  getBrands(){
    this._ProductsService.getBrands().subscribe({
      next:(res)=>{
        console.log(res);
        this.allBrands.data=res.data
        console.log(res.data);
        
        
      }
    })
  }
}
