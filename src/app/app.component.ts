import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Angular 2 App';
  phoneNumber: String;
  save(phoneNumber: String) {
    this.phoneNumber = phoneNumber;
  }
}

