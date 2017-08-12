import { Component } from '@angular/core';
import { CUSTOMERS } from './customer.data';
import { Router } from '@angular/router';
@Component({
  selector: 'customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent {
  customers = CUSTOMERS;
  selectedCustomer: any;
  constructor(private router: Router) { }
  onSelectCustomer(customer: any) {
    this.router.navigate(['/customers', customer.customerId]);
  }
}