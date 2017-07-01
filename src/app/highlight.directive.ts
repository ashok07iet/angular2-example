import {Directive,ElementRef} from '@angular/core';
@Directive({
    selector:'[myHighlight]'
})
export class HighlightDirective{
    constructor(private el:ElementRef){
        el.nativeElement.style.backgroundColor="yellow";
    }
}
