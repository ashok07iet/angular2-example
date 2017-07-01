import {Directive,ElementRef,HostListener} from '@angular/core';
@Directive({
    selector:'[myHighlight]'
})
export class HighlightDirective{
    @HostListener('mouseenter') onmouseenter(){
        this.highlight('yellow');
    }
    @HostListener('mouseleave') onmouseleave(){
        this.highlight('');
    }
    constructor(private el:ElementRef){
        
    }
    private highlight(color:string):void{
     this.el.nativeElement.style.backgroundColor=color;
    }
}
