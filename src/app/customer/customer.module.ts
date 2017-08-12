import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDetailComponent } from './customer-detail.component';
@NgModule({
    imports: [
        CommonModule,
        CustomerRoutingModule
    ],
    declarations: [
        CustomerComponent,
        CustomerDetailComponent
    ],
    providers: []
})
export class CustomerModule { }