import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NameParent } from './name-parent.component';
import { NameChild } from './name-child.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    NameParent,
    NameChild
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
