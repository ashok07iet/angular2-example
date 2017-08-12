import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';

const appRoute: Routes = [
  {
    path: 'customers',
    component: CustomerComponent
  },
  {
    path: 'orders',
    component: OrderComponent
  },
  {
    path: '',
    redirectTo: '/customers',
    pathMatch: 'full'

  }];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  declarations: [
    AppComponent,
    CustomerComponent,
    OrderComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
