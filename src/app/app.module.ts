import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PowerBoosterComponent } from './power-booster.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';

@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [PowerBoosterComponent,ExponentialStrengthPipe],
  bootstrap: [PowerBoosterComponent]
})
export class AppModule {
  constructor() { }
}
