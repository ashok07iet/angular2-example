import { Component } from '@angular/core';

@Component({
    selector: 'hero-birthday',
    template: `<p>hero birthday is {{birthday|date:"MM/dd/yy"}}</p>`
})
export class HeroBirthdayComponent {
    birthday = new Date(1988, 3, 15);
}