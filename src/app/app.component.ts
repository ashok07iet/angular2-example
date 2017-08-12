import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Customer } from './customer.model';
import 'rxjs/add/operator/retry';
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
    this.http.get<Customer[]>('/data/item.json1').retry(3).
      subscribe(data => {
        this.result = data['results'];
        console.log(this.result);
      }, (err: HttpErrorResponse) => {
        if (err instanceof Error) {
          console.log('err occured' + err.message);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      });
  }
}
