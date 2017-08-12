import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { CUSTOMERS } from './customer.data';

@Component({
    templateUrl: './customer-detail.html'
})
export class CustomerDetailComponent implements OnInit {
    customer = {};
    constructor(
        private route: ActivatedRoute
    ) { }
    ngOnInit() {
        let id = this.route.snapshot.paramMap.get('id');
        for (let entry of CUSTOMERS) {
            if (entry.customerId === parseInt(id, 10)) {
                this.customer = entry;
            }
        }
    }
}
