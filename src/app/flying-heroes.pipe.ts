import { Pipe, PipeTransform } from '@angular/core';
interface Flyer { canFly: boolean; }
@Pipe({ name: 'flyingHeroes' })
export class FlyingHeroesPipe implements PipeTransform {
  transform(allHeroes: Flyer[]) {
    return allHeroes.filter(hero => hero.canFly);
  }
}