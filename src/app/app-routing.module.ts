import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { ForgetPasswordFormComponent } from './forget-password-form/forget-password-form.component';
import { ResetCodeComponent } from './reset-code/reset-code.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { BrandsComponent } from './brands/brands.component';
import { WishListPageComponent } from './wish-list-page/wish-list-page.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",canActivate:[AuthGuard],component:HomeComponent,title:"Home"},
  {path:"categories",canActivate:[AuthGuard],component:CategoryPageComponent,title:"Categories"},
  {path:"products",canActivate:[AuthGuard],component:ProductsPageComponent,title:"Products"},
  {path:"wishList",canActivate:[AuthGuard],component:WishListPageComponent,title:"My List"},
  {path:"brands",canActivate:[AuthGuard],component:BrandsComponent,title:"Brands"},
  {path:"productDetails/:id",canActivate:[AuthGuard],component:ProductDetailsComponent,title:"product detais"},
  {path:"checkOut/:id",canActivate:[AuthGuard],component:CheckOutComponent,title:"CheckOut"},
  {path:"allorders",canActivate:[AuthGuard],component:AllOrdersComponent,title:"congratulation.."},
  {path:"categoryDetails/:id",canActivate:[AuthGuard],component:CategoryDetailsComponent,title:"Category details"},
  {path:"forgetPassword",component:ForgetPasswordFormComponent,title:"Forget Password"},
  {path:"resetCode",component:ResetCodeComponent,title:"Verify Reset Code"},
  {path:"updatePassword",component:UpdatePasswordComponent,title:"update password"},

  {path:"sign-in",component:SignInComponent,title:"Sign-in"},
  {path:"sign-up",component:SignUpComponent,title:"Sign-up"},
  {path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule),canActivate:[AuthGuard],title:"Cart" },


  {path:"**",component:NotFoundComponent,title:"Not Found"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
