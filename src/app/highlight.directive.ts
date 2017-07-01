import {Directive,ElementRef,HostListener,Input} from '@angular/core';
@Directive({
    selector:'[myHighlight]'
})
export class HighlightDirective{
    @Input() highlightColor:string;

    @HostListener('mouseenter') onmouseenter(){
        this.highlight(this.highlightColor);
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
