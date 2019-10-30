import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appMain]'
})
export class MainDirective {

  constructor() { }

  @HostListener('click', ['$event.target'])
  onClick(target) {
    console.log(target);

  }

}

