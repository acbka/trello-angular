import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appEdit]'
})
export class EditDirective {

   @HostBinding('class.edit') isEdited= false;

   @HostListener('click') onClick() {
      this.isEdited= true;
   }

   @HostListener('mouseleave') onMouseLeave() {
      this.isEdited = false;
   }

  constructor() { }

}
