import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';
import { HeroComponent } from './hero-form.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule,FormsModule],
  providers: [],
  declarations: [AppComponent,HeroComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}
