import { Component } from '@angular/core';
@Component({
  selector: 'key-up4',
  template: `
    <div class="jumbotron" style="width:500px;padding:20px">
    <p>type away press enter or focus out when done</p>
    <input #box (keyup.enter)="update(box.value)" (blur)="update(box.value)">
    <p>{{value}}</p>
    </div>
  `
})
export class KeyUpComponent_v4 {
  value = '';
  update(value: string) { this.value = value; }
}