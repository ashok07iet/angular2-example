import {Component} from '@angular/core';
    const HEROES=[
        {name:"james",canFly:true}
    ];
@Component({
    selector:'my-hero',
    templateUrl:'./flying-heroes.component.htm'
})
export class FlyingHeroesComponent {
  heroes: any[] = [];
  canFly = true;
  constructor() { this.reset(); }

  addHero(name: string) {
    name = name.trim();
    if (!name) { return; }
    let hero = {name, canFly: this.canFly};
    this.heroes.push(hero);
  }

  reset() { this.heroes = HEROES.slice(); }
}