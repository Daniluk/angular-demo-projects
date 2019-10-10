import { Directive, ElementRef, HostListener } from '@angular/core';
import { TextEditorService } from '../text-editor.service';

@Directive({
  selector: '[appTextEditorSynonyms]'
})
export class TextEditorSynonymsDirective {

  constructor(
    private el: ElementRef,
    private serviceTextEditor: TextEditorService
  ) {

  }

  @HostListener('click') onClick() {
    const name = this.el.nativeElement.name;
    this.serviceTextEditor.setSynonym(name);
  }
}
