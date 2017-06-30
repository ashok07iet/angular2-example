import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { VersionParent } from './version-parent.component';
import { VersionChild } from './version-child.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    VersionParent,
    VersionChild
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
