import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject,  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  useData:BehaviorSubject<any>=new BehaviorSubject("")
  constructor(private _http:HttpClient , private _router:Router) {
    if(localStorage.getItem("userToken")){
      this.getUserData()
    }

   }

   getUserData(){
    let encodedToken= JSON.stringify(localStorage.getItem("userToken"))
    let encoded = jwtDecode(encodedToken)
    this.useData.next(encoded)

   }
   register(data:any): Observable <any>{
    return this._http.post('https://ecommerce.routemisr.com/api/v1/auth/signup', data);
   }
   login(data:any): Observable <any>{
    return this._http.post('https://ecommerce.routemisr.com/api/v1/auth/signin', data);
   }


   logOut(){
    localStorage.removeItem("userToken")
    this.useData.next(null)
    this._router.navigate(['/sign-in'])
   }

   forgetPassword(email:string): Observable <any>{
    return this._http.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',{
      email:email
    });
   }

   verifyCode(resetCode:string): Observable <any>{
    return this._http.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',{
      resetCode:resetCode
    });
   }

   resetPassword(email:string,newPassword:string): Observable <any>{
    return this._http.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',{
      email:email,
      newPassword:newPassword
    });
   }

}

