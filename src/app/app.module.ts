import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroParent } from './hero-parent.component';
import { HeroChild } from './hero-child.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    HeroParent,
    HeroChild
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }