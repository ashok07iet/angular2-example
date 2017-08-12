import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
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
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get<Customer[]>('/data/item.json').
      subscribe(data => {
        this.result = data['results'];
        console.log(this.result);
      });
  }
}
