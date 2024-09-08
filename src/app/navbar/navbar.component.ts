import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLoggedIn:boolean=false

  constructor(private _authServive:AuthService){
    this._authServive.useData.subscribe((res)=>{
      if(this._authServive.useData.getValue()){
        this.isLoggedIn=true
      }else{
        this.isLoggedIn=false
      }
    })

  }

  logOut(){
    this._authServive.logOut()
  }

}
