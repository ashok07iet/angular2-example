import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'tour of Hero';
  currentHero: {};
  nullHero: {};
  isActive = false;
  constructor() {
    this.currentHero = { name: 'Jhon' };
    this.nullHero = { name: 'Rodrik' };
  }
}
