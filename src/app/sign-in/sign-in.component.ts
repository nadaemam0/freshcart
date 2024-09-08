import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators , ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private _authService:AuthService, private _router:Router){

  }

  isLoading:boolean=false
  apiMsg:string=''
  isNotValid:boolean=false


  loginForm:FormGroup=new FormGroup({
    email:new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('',[Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
  });

  

  login(form:FormGroup){    
    if(form.valid){
      this.isLoading=true
      this._authService.login(form.value).subscribe({
        next:(data)=>{
          this.isLoading=false
          localStorage.setItem("userToken",data.token)
          this._authService.getUserData()
          this._router.navigate(['/home'])
        },
        error:(err)=>{
          this.isLoading=false
          console.log(err);
          
          if(err.error.message=='fail'){
            this.apiMsg=err.error.errors.msg
          }else{
             this.apiMsg=err.error.message
          }
        }
      })
    }else{
      this.isNotValid=true      
    }

  }
  

}
