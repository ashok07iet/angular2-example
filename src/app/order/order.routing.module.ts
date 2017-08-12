import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order.component';

const appRoute: Routes = [
    {
        path: 'orders',
        component: OrderComponent
    }];

@NgModule({
    imports: [
        RouterModule.forChild(appRoute)
    ],
    exports: [
        RouterModule
    ]
})
export class OrderRoutingModule {}
