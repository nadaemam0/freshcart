import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent {
  
  constructor( private _auth:AuthService){
  }

  resetPasswordForm:FormGroup=new FormGroup({
    email:new FormControl('',[Validators.required, Validators.email]),
    newPassword:new FormControl('',[Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
  });

  
  resetPassword(resetPasswordForm:FormGroup){
    this._auth.resetPassword(resetPasswordForm.value.email,resetPasswordForm.value.newPassword).subscribe({
      next:(res)=>{
        console.log(res);
        window.location.href = "/sign-in";
        
      }
    })
    


}
}
