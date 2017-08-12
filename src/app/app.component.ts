import { Component, OnInit } from '@angular/core';
import { Customer } from './customer.model';
import 'rxjs/add/operator/map';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [`table,th,td{
    border:1px solid;
    border-collapse: collapse;
  }`]
})
export class AppComponent implements OnInit {
  title = 'customer detail';
  isUnchanged = false;
  result: Customer[] = [];
 // constructor(private http: Http) { }
  ngOnInit(): void {
    // this.http.get('/data/item.json')
    //   .map(data => data.json().results as Customer[]).subscribe(data => {
    //     this.result = data;
    //   });
  }
}
