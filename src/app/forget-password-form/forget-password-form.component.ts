import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password-form',
  templateUrl: './forget-password-form.component.html',
  styleUrls: ['./forget-password-form.component.css']
})
export class ForgetPasswordFormComponent {

  constructor( private _auth:AuthService){
  }

  forgetPasswordForm:FormGroup=new FormGroup({
    email:new FormControl('',[Validators.required, Validators.email]),
  });


  forgetPassword(forgetPasswordForm:FormGroup){
    this._auth.forgetPassword(forgetPasswordForm.value.email).subscribe({
      next:(res)=>{
        console.log(res);
        if(res.statusMsg=="success"){
        window.location.href = "/resetCode";
        }
      }
    })
    
  }

}
