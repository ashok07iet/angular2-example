import {Component} from '@angular/core';
import {HEROES} from './hero'
@Component({
    selector:'hero-parent',
    templateUrl:'./hero-parent.component.html'
})
export class HeroParent{
  heroes=HEROES;
  master='Master';
}