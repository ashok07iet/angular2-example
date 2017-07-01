import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { CountdownTimerComponent } from './countdown-timer.component'

@Component({
  selector: 'countdown-parent-vc',
  templateUrl: './countdown-parent.component.html'
})
export class CountdownLocalVarParentComponent implements AfterViewInit {
  @ViewChild(CountdownTimerComponent)
  private couterTimer: CountdownTimerComponent;
  seconds() { return 0; };
  ngAfterViewInit() {
    setTimeout(() => this.seconds = () => this.couterTimer.seconds, 0);
  }
  start(): void {
    this.couterTimer.start();
  }
  stop(): void {
    this.couterTimer.stop();
  }
}
