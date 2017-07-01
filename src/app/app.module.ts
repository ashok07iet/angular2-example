import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MissionControllerComponent } from './missioncontrol.component';
import { AstronautComponent } from './astronaut.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    MissionControllerComponent,
    AstronautComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
