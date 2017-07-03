import { Component } from '@angular/core';

@Component({
    selector: 'hero-birthday',
    template: `<p>hero birthday is {{birthday|date:format}}</p>
               <button (click)=toggleFormat()>toggle format</button>
    `
})
export class HeroBirthdayComponent {
    birthday = new Date(1988, 3, 15);
    toggle=true;
    get format(){return this.toggle ? 'shortDate' : 'fullDate';}
    toggleFormat(){
        this.toggle=!this.toggle;
    }
}