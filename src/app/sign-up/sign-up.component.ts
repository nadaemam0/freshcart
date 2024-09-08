import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators , ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private _authService:AuthService, private _router:Router){

  }

  isLoading:boolean=false
  apiMsg:string=''
  isNotValid:boolean=false


  registerForm:FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(20)]),
    email:new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('',[Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
    rePassword:new FormControl('',[Validators.required,  Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
    phone:new FormControl('',[Validators.required, Validators.minLength(10),Validators.maxLength(13)])
  });

  

  register(form:FormGroup){    
    if(form.valid){
      this.isLoading=true
      this._authService.register(form.value).subscribe({
        next:(data)=>{
          this.isLoading=false
          this._router.navigate(['/sign-in'])
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
