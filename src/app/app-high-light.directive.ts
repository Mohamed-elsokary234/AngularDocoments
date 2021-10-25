import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAppHighLight]'
})
export class AppHighLightDirective {
  @Input("appAppHighLight") hcolor:string="green";
  //@Input("appAppHighLight")
   bcolor:string="yellow";

@HostListener('mouseenter') onmouseenter(){
  this.el.nativeElement.style.backgroundColor=this.hcolor;

}
@HostListener('mouseleave') onmouseleave(){
  this.el.nativeElement.style.backgroundColor="red";

}
  constructor(private el:ElementRef) {
    this.el.nativeElement.style.backgroundColor=this.bcolor;
   }

}
