import { Component} from '@angular/core';
import { CUSTOMERS} from './customer.data';
@Component({
  selector: 'customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent {
    customers = CUSTOMERS;
}