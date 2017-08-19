import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Angular 2 App';
  submitMessage: String;
  phone: any;
  hero = { name: '' };
  onSubmit(phone: NgForm) {
    this.submitMessage = JSON.stringify(phone.value);
  }
}

