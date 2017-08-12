import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { PageNotFoundComponent } from './pageNotFound.component';
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

    },
    { path: '**', component: PageNotFoundComponent }];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoute)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
