import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFailure]',
  standalone: true
})
export class FailureDirective 
{

  constructor(private obj : ElementRef) 
  { }

  @HostListener("mouseenter") onmouseenter()
  {
    this.obj.nativeElement.style.background = 'red'
  }

  @HostListener("mouseleave") onmouseeleave()
  {
    this.obj.nativeElement.style.background = 'black'
  }



}
