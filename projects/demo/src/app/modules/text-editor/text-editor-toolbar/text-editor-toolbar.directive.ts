import { AfterViewInit, Directive, ElementRef, HostListener, OnInit, Renderer2, ViewChild, Input } from '@angular/core';
import { TEXT_EDITOR_TOOLBAR } from '../text-editor-toolbar/config/names';
import { TextEditorService } from '../text-editor.service';
import { ICommand, TYPE } from './interfaces/ICommand';
import { IToolBarButton } from './interfaces/IToolBarButton';

@Directive({
  selector: '[appTextEditorToolbar]',
})
export class TextEditorToolbarDirective implements OnInit {

  private isClicked = false;

  constructor(
    private el: ElementRef,
    private serviceTextEditor: TextEditorService,
    private renderer: Renderer2
  ) {
    this.isClicked = false;

    this.setToolBarDefaultSubscribe();
    this.setToolBarButtonClickedSubscribe();
  }

  @HostListener('click') onClick() {
    this.isClicked = !this.isClicked;
    let command: ICommand;

    if (this.isClicked) {
      command = { NAME: this.el.nativeElement.name, TYPE: TYPE.ADD };
    } else {
      command = { NAME: this.el.nativeElement.name, TYPE: TYPE.REMOVE };
      this.el.nativeElement.blur();
    }
    if (this.el.nativeElement.getAttribute('status') === 'format') {
      this.renderer[this.isClicked ? 'addClass' : 'removeClass'](this.el.nativeElement, 'active');
    }

    this.serviceTextEditor.setCommand(command);
  }

  ngOnInit() {

  }

  private setToolBarDefaultSubscribe(): void {
    this.serviceTextEditor.setToolBarDefault$.subscribe((data) => {
      this.isClicked = false;
      this.setToolBarDefault();
    });
  }

  private setToolBarButtonClickedSubscribe(): void {
    this.serviceTextEditor.setToolBarButtonClicked$.subscribe((data: string) => {
      Object.entries(TEXT_EDITOR_TOOLBAR.TYPE).forEach((value) => {
        const button: any = value.filter(item => item['TAG'] && item['TAG'].includes(data.toLowerCase()))[0];
        if (button && this.el.nativeElement.getAttribute('name') === button.BUTTON_NAME) {
          this.setButtonClicked();
        }
      });
    });
  }

  private setToolBarDefault(): void {
    this.isClicked = false;
    this.renderer[this.isClicked ? 'addClass' : 'removeClass'](this.el.nativeElement, 'active');
  }

  private setButtonClicked(): void {
    this.isClicked = true;
    this.renderer[this.isClicked ? 'addClass' : 'removeClass'](this.el.nativeElement, 'active');
  }
}
