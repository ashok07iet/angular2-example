import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { PageNotFoundComponent } from './pageNotFound.component';
const appRoute: Routes = [
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
