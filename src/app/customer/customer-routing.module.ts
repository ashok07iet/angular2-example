import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomerDetailComponent } from './customer-detail.component';
const appRoute: Routes = [
    {
        path: 'customers',
        component: CustomerComponent
    },
    {
        path: 'customers/:id',
        component: CustomerDetailComponent
    }];

@NgModule({
    imports: [
        RouterModule.forChild(appRoute)
    ],
    exports: [
        RouterModule
    ]
})
export class CustomerRoutingModule { }
