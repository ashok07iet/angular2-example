import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';
import { PowerBoostCalculatorComponent } from './power-boost-calculator.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';

@NgModule({
  imports: [BrowserModule,FormsModule],
  providers: [],
  declarations: [PowerBoostCalculatorComponent,ExponentialStrengthPipe],
  bootstrap: [PowerBoostCalculatorComponent]
})
export class AppModule {
  constructor() { }
}
