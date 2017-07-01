import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CountdownLocalVarParentComponent } from './countdown-parent.component';
import { CountdownTimerComponent } from './countdown-timer.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    CountdownLocalVarParentComponent,
    CountdownTimerComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
