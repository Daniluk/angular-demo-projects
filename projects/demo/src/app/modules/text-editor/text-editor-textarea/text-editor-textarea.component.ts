import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { TextEditorService } from '../text-editor.service';
import TEXTS from './data/texts.json';

@Component({
  selector: 'app-text-editor-textarea',
  templateUrl: './text-editor-textarea.component.html',
  styleUrls: ['./text-editor-textarea.component.scss'],
})
export class TextEditorTextareaComponent implements OnInit, AfterViewInit {

  @ViewChild('textarea', { static: true }) el: ElementRef;
  @ViewChild('someInput', { static: true }) someInput: ElementRef;

  textValue: string = TEXTS.items[1].text;
  synonyms: string[];

  fontSize: number;
  font: string;

  constructor(
    private serviceTextEditor: TextEditorService,
  ) {
    this.serviceTextEditor.setSynonyms$.subscribe((data) => {
      const items = data as string[];
      this.synonyms = items;
    });
    this.serviceTextEditor.setFontSize$.subscribe((data) => {
      this.fontSize = data as number;
      console.log(data);
    });

    this.serviceTextEditor.setFont$.subscribe((data) => {
      this.font = data as string;
      console.log(data);
    });
  }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }

}
