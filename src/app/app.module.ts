import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';
import { FlyingHeroesComponent } from './flying-heroes.component';

@NgModule({
  imports: [BrowserModule,FormsModule],
  providers: [],
  declarations: [FlyingHeroesComponent],
  bootstrap: [FlyingHeroesComponent]
})
export class AppModule {
  constructor() { }
}
