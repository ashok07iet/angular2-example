import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { VoterComponent } from './voter.component';
import { VoteTakerComponent } from './votetaker.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    VoterComponent,
    VoteTakerComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
