import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';
import { FlyingHeroesComponent } from './flying-heroes.component';
import {FlyingHeroesPipe} from './flying-heroes.pipe';
@NgModule({
  imports: [BrowserModule,FormsModule],
  providers: [],
  declarations: [FlyingHeroesComponent,FlyingHeroesPipe],
  bootstrap: [FlyingHeroesComponent]
})
export class AppModule {
  constructor() { }
}
