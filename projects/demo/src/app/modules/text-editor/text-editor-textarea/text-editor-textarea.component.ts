import { Component, Input, OnInit } from '@angular/core';
import { TextEditorService } from '../text-editor.service';
import TEXTS from './data/texts.json';

@Component({
  selector: 'app-text-editor-textarea',
  templateUrl: './text-editor-textarea.component.html',
  styleUrls: ['./text-editor-textarea.component.scss'],
})
export class TextEditorTextareaComponent implements OnInit {

  textValue: string = TEXTS.items[1].text;
  @Input()
  synonyms: string[];

  constructor(
    private serviceTextEditor: TextEditorService,
  ) {
    this.serviceTextEditor.setSynonyms$.subscribe((data) => {
      const items = data as string[];
      this.synonyms = items;
    });
  }

  ngOnInit() {

  }

}
