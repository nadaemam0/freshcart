import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http:HttpClient) { }

  getProducts(): Observable <any>{
    return this._http.get('https://ecommerce.routemisr.com/api/v1/products');
   }

   getCategory(): Observable <any>{
    return this._http.get('https://ecommerce.routemisr.com/api/v1/categories');
   }

   
  getProductById(id:string): Observable <any>{
    return this._http.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
   }

   getSubCategory(id:string):Observable<any>{
    return this._http.get(`https://route-ecommerce.onrender.com/api/v1/categories/${id}/subcategories`)
   }

   addToWishList(id:string):Observable<any>{
    return this._http.post(`https://route-ecommerce.onrender.com/api/v1/wishlist`,{
      productId:id
    },{
      headers:{
        token:`${localStorage.getItem("userToken")}`
      }
    })
   }

   removeFromWishList(id:string):Observable<any>{
    return this._http.delete(`https://route-ecommerce.onrender.com/api/v1/wishlist/${id}`,{
      headers:{
        token:`${localStorage.getItem("userToken")}`
      }
    })
   }

   getWishList():Observable<any>{
    return this._http.get(`https://route-ecommerce.onrender.com/api/v1/wishlist`,{
      headers:{
        token:`${localStorage.getItem("userToken")}`
      }
    })
   }

   getBrands(): Observable <any>{
    return this._http.get('https://ecommerce.routemisr.com/api/v1/brands');
   }



   
}
