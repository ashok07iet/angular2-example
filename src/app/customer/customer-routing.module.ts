import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';

const appRoute: Routes = [
    {
        path: 'customers',
        component: CustomerComponent
    }];

@NgModule({
    imports: [
        RouterModule.forChild(appRoute)
    ],
    exports: [
        RouterModule
    ]
})
export class CustomerRoutingModule {}
