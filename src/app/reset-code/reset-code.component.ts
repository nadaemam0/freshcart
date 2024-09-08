import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-code',
  templateUrl: './reset-code.component.html',
  styleUrls: ['./reset-code.component.css']
})
export class ResetCodeComponent {

  constructor( private _auth:AuthService){
  }

  verifyCodeForm:FormGroup=new FormGroup({
    resetCode:new FormControl('',[Validators.required]),
  });


  verifyCode(verifyCodeForm:FormGroup){
    this._auth.verifyCode(verifyCodeForm.value.resetCode).subscribe({
      next:(res)=>{
        console.log(res);
        if(res.status=="Success"){
        window.location.href = "/updatePassword";

        
        }
      }
    })
    
  }
}
