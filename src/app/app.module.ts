import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive'


@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [AppComponent, HighlightDirective],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}
