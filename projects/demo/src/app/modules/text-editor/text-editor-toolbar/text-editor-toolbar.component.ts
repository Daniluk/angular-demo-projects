import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TEXT_EDITOR_TOOLBAR } from '../text-editor-toolbar/config/names';
import { IToolBarButton } from './interfaces/IToolBarButton';
import { TextEditorService } from '../text-editor.service';
import { ICommand } from './interfaces/ICommand';

@Component({
  selector: 'app-text-editor-toolbar',
  templateUrl: './text-editor-toolbar.component.html',
  styleUrls: ['./text-editor-toolbar.component.scss'],
  providers: []
})

export class TextEditorToolbarComponent implements OnInit {
  @ViewChild('navColor', { static: true }) input: ElementRef<HTMLElement>;
  searchDebounce = 300;
  baseFonts = ['monospace', 'sans-serif', 'serif', 'Comic Sans MS'];
  fontSizes = [3, 4, 5, 6, 7, 8, 9, 10, 11];
  selectedFont: string;
  selectedFontSize: number;
  timeFormControl;

  itemsStyle: IToolBarButton[] = [
    TEXT_EDITOR_TOOLBAR.TYPE.BOLD,
    TEXT_EDITOR_TOOLBAR.TYPE.ITALIC,
    TEXT_EDITOR_TOOLBAR.TYPE.UNDERLINED,
   // TEXT_EDITOR_TOOLBAR.TYPE.SIZE,
    TEXT_EDITOR_TOOLBAR.TYPE.COLOR_TEXT,
  ];

  itemsAlign: IToolBarButton[] = [
    TEXT_EDITOR_TOOLBAR.TYPE.ALIGN_CENTER,
    TEXT_EDITOR_TOOLBAR.TYPE.ALIGN_JUSTIFY,
    TEXT_EDITOR_TOOLBAR.TYPE.ALIGN_LEFT,
    TEXT_EDITOR_TOOLBAR.TYPE.ALIGN_RIGHT,
  ];

  constructor(
    private serviceTextEditor: TextEditorService,
  ) {
    this.selectedFont = this.baseFonts.slice(-1)[0];
    this.selectedFontSize = this.fontSizes[0];

    this.addCommandSubscribe();
  }

  ngOnInit() {
    this.serviceTextEditor.setFontSize(this.selectedFontSize);
    this.serviceTextEditor.setFont(this.selectedFont);

    if (this.input) {
      this.input.nativeElement.addEventListener('input', (target) => {
        // tslint:disable-next-line: no-string-literal
        const color = target.currentTarget['value'];
        this.serviceTextEditor.setFontColor(color);
      }, false);
    }
  }

  onChangeFontSize(value: number): void {
    this.selectedFontSize = value;
    this.serviceTextEditor.setFontSize(this.selectedFontSize);
  }

  onChangeFont(value: string): void {
    this.selectedFont = value;
    this.serviceTextEditor.setFont(this.selectedFont);
  }

  private addCommandSubscribe(): void {
    this.serviceTextEditor.setCommand$.subscribe((data) => {
      const command = data as ICommand;
      if (command.NAME === TEXT_EDITOR_TOOLBAR.TYPE.COLOR_TEXT.BUTTON_NAME) {
        const el: HTMLElement = this.input.nativeElement;
        el.click();
      }
    });
  }
}
