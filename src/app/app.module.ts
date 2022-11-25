import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsersComponent } from './shared/component/users/users.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { UserComponent } from './shared/component/users/user/user.component';
import { ProductComponent } from './shared/component/products/product/product.component';
import { NavigationComponent } from './shared/component/navigation/navigation.component';
import { HomeComponent } from './shared/component/home/home.component';
import { EditProductComponent } from './shared/component/products/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ProductsComponent,
    UserComponent,
    ProductComponent,
    NavigationComponent,
    HomeComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
