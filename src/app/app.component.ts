import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'tour of customer';
  customer = {};
  currentHero = { name: 'ass' };
  name = '';
  email = '';
  save() {
    this.customer = this.name + '::' + this.email;
  }
}
