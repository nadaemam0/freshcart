import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartServiveService } from '../shared/services/cart-servive.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent {

  cartId:string=''
  shippingAddress: FormGroup=new FormGroup({
    details:new FormControl(null),
    phone:new FormControl(null),
    city:new FormControl(null)

  })
  constructor(private _cartService:CartServiveService ,private _activatedRoute:ActivatedRoute){
    this._activatedRoute.paramMap.subscribe((res:any)=>{
        this.cartId=res.params.id          
    })
  }

  onlinePayment(){
    this._cartService.onlinePayment(this.cartId, this.shippingAddress.value).subscribe({
      next:(res)=>{
        if(res.status=="success"){
          window.open(res.session.url)
        }
      }
    })

  }

  cashPayment(){
    this._cartService.cashPayment(this.cartId, this.shippingAddress.value).subscribe({
      next:(res)=>{
        if(res.status=="success"){
          window.open('/allorders')
        }
      }
    })

  }
}
