import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'tour of Hero';
  currentHero =  {
    name: 'Jhon',
    id: 100,
    emotion: 'happy'
  };

  heroes= [
    {
      name: 'Jhon',
      id: 100,
      emotion: 'happy'
    },
    {
      name: 'jordan',
      id: 101,
      emotion: 'sad'
    },
    {
      name: 'rodrik',
      id: 102,
      emotion: 'confused'
    }
  ];
}
