import { Component } from '@angular/core';
import { ORDERS } from './order.data';
@Component({
    templateUrl: './order.component.html'
})
export class OrderComponent {
    orders = ORDERS;
}