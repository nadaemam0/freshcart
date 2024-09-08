import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoryComponent } from './category/category.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { SearchPipePipe } from './search-pipe.pipe';
import { FilterProductsPipe } from './shared/services/filter-products.pipe';
import { CheckOutComponent } from './check-out/check-out.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { LoaderComponent } from './loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderInterceptor } from './loader.interceptor';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { ForgetPasswordFormComponent } from './forget-password-form/forget-password-form.component';
import { ResetCodeComponent } from './reset-code/reset-code.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { BrandsComponent } from './brands/brands.component';
import { WishListPageComponent } from './wish-list-page/wish-list-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    NotFoundComponent,
    HomeComponent,
    FeaturedProductsComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    CategoryComponent,
    MainSliderComponent,
    SearchPipePipe,
    FilterProductsPipe,
    CheckOutComponent,
    AllOrdersComponent,
    LoaderComponent,
    CategoryDetailsComponent,
    ForgetPasswordFormComponent,
    ResetCodeComponent,
    UpdatePasswordComponent,
    CategoryPageComponent,
    ProductsPageComponent,
    BrandsComponent,
    WishListPageComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule, 
    FormsModule,
    MatProgressSpinnerModule
  ],
  providers: [     {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true,
 }],
  bootstrap: [AppComponent]
})
export class AppModule { }
