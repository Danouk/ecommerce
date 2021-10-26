import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsCategorieComponent } from './products-categorie/products-categorie.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { BannersTermsComponent } from './banners-terms/banners-terms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WebStorageModule } from 'ngx-store';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewsletterComponent,
    FooterComponent,
    HomeComponent,
    ProductsCategorieComponent,
    ProductComponent,
    CartComponent,
    BannersTermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    WebStorageModule.forRoot(),
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
