import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pageNotFound.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomerModule } from './customer/customer.module';
import { OrderModule } from './order/order.module';

@NgModule({
  imports: [
    BrowserModule,
    CustomerModule,
    OrderModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
