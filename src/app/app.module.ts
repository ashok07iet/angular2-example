import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { PageNotFoundComponent } from './pageNotFound.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CustomerComponent,
    OrderComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
