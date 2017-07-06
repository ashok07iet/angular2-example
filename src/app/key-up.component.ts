import { Component } from '@angular/core';
@Component({
    selector: 'key-up',
    template: `<div class="jumbotron" style="width:500px;padding:20px">
    <p>input example</p>
    <input #box (keyup)=onkey(box.value)>
    <p>{{values}}</p>
    </div>
    `
}
)
export class keyupComponent {
    values = '';
    onkey(value: string) {
        this.values += value + '|';
    }
}