import { ProductFormComponent } from './admin/product-form/product-form.component';
import { FullScreenService } from './layout/full-screen.service';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule } from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { MaterialComponentsModule } from './material-components/material-components.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HomeComponent } from './home/home.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderComponent } from './order/order.component';
import { AccountComponent } from './user/account/account.component';
import { OrdersComponent } from './user/orders/orders.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductService } from './services/data/products.service';
import { UserService } from './services/user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderComponent,
    AccountComponent,
    OrdersComponent,
    OrderCompleteComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(), 
    AngularFireAuthModule,
    MaterialComponentsModule,
    
  ],
  
  providers: [
    AuthGuard,
    AuthService,
    UserService,
    AdminAuthGuard,
    FullScreenService,
    ProductService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
