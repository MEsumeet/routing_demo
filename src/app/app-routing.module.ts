import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/component/home/home.component';
import { EditProductComponent } from './shared/component/products/edit-product/edit-product.component';
import { ProductComponent } from './shared/component/products/product/product.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { UserComponent } from './shared/component/users/user/user.component';
import { UsersComponent } from './shared/component/users/users.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "users", component: UsersComponent,
    children: [
      {
        path: "", component: UserComponent
      },
      {
        path: ":id", component: UserComponent
      }
    ]
  },
  {
    path: "products", component: ProductsComponent, 
    children: [
      {
        path: "", component: ProductComponent
      },
      {
        path: ":id", component: ProductComponent
      },
      {
        path: ":id/edit", component: EditProductComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
