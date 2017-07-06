import { Component } from '@angular/core';
@Component({
  selector: 'key-up3',
  template: `
    <div class="jumbotron" style="width:500px;padding:20px">
    <p>type away press enter when done</p>
    <input #box (keyup.enter)="onEnter(box.value)">
    <p>{{value}}</p>
    </div>
  `
})
export class KeyUpComponent_v3 {
  value = '';
  onEnter(value: string) { this.value = value; }
}
