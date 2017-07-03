import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeroBirthdayComponent } from './hero-birthday1.component';


@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [HeroBirthdayComponent],
  bootstrap: [HeroBirthdayComponent]
})
export class AppModule {
  constructor() { }
}
