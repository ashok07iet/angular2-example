import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  result: string = '';
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get('/data/test-data.txt', { responseType: 'text' }).
      subscribe(data => {
        this.result = data;
      });
  }
}
