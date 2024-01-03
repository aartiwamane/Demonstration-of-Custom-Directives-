import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSucess]',
  standalone: true
})
export class SucessDirective 
{

  constructor(private obj : ElementRef) 
  { }

  @HostListener("mouseenter") onmouseenter()
  {
    this.obj.nativeElement.style.background = 'green'
  }

  @HostListener("mouseleave") onmouseleave()
  {
    this.obj.nativeElement.style.background = 'black'
  }


}
