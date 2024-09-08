import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiveService {

  constructor(private _httpClientp:HttpClient) { }

  addProductToCart(id:string):Observable<any>{
    return this._httpClientp.post("https://ecommerce.routemisr.com/api/v1/cart",{
      productId:id
    },{
      headers:{
        token:`${localStorage.getItem("userToken")}`
      }
    })
  }

  getCart():Observable<any>{
    return this._httpClientp.get("https://ecommerce.routemisr.com/api/v1/cart",{
      headers:{
        token:`${localStorage.getItem("userToken")}`
      }
    })
  }

  updateCartCount(count:number,id:string):Observable<any>{
    return this._httpClientp.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
      count:`${count}`
    },{
      headers:{
        token:`${localStorage.getItem("userToken")}`
      }
    })
  }

  removeProduct(id:string):Observable<any>{
    return this._httpClientp.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
      headers:{
        token:`${localStorage.getItem("userToken")}`
      }
    })
  }

  onlinePayment(cartId:string,shippingAddress:any):Observable<any>{
    return this._httpClientp.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,{
      shippingAddress:shippingAddress
    },{
      headers:{
        token:`${localStorage.getItem("userToken")}`
      }
    })
  }

  cashPayment(cartId:string,shippingAddress:any):Observable<any>{
    return this._httpClientp.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,{
      shippingAddress:shippingAddress
    },{
      headers:{
        token:`${localStorage.getItem("userToken")}`
      }
    })
  }
}
