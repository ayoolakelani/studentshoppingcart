import { ProductFormComponent } from './admin/product-form/product-form.component';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { AuthGuard } from './auth-guard.service';
import { AccountComponent } from './user/account/account.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';
import { OrdersComponent } from './user/orders/orders.component';

const routes: Routes = [
  { path: 'home', component: ProductsComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'shopping-cart', component: ShoppingCartComponent},
  { path: 'cart', redirectTo: '/shopping-cart', pathMatch: 'full'},

  { path: 'login', component: LoginComponent},
  { path: 'order', component: OrderComponent},

  { path: 'user/account', component: AccountComponent, canActivate : [AuthGuard]},
  { path: 'user/orders', component: OrdersComponent, canActivate : [AuthGuard]},
  { path: 'user/checkout', component: CheckOutComponent, canActivate : [AuthGuard]},
  { path: 'user/order-complete', component: OrderCompleteComponent, canActivate : [AuthGuard]},

 
  { path: 'admin/products/new', component: ProductFormComponent, canActivate : [AuthGuard, AdminAuthGuard]},
  { path: 'admin/products/:id', component: ProductFormComponent, canActivate : [AuthGuard, AdminAuthGuard]},
  { path: 'admin/products', component: AdminProductsComponent, canActivate : [AuthGuard, AdminAuthGuard]},
  { path: 'admin/orders', component: AdminOrdersComponent, canActivate : [AuthGuard, AdminAuthGuard ]},

 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
