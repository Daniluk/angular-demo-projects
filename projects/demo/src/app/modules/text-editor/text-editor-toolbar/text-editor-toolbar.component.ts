import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TEXT_EDITOR_TOOLBAR } from '../text-editor-toolbar/config/names';
import { IToolBarButton } from './interfaces/IToolBarButton';

@Component({
  selector: 'app-text-editor-toolbar',
  templateUrl: './text-editor-toolbar.component.html',
  styleUrls: ['./text-editor-toolbar.component.scss'],
  providers: [ ]
})

export class TextEditorToolbarComponent implements OnInit {
  searchDebounce = 300;
  items_style: IToolBarButton[] = [
    TEXT_EDITOR_TOOLBAR.TYPE.BOLD,
    TEXT_EDITOR_TOOLBAR.TYPE.ITALIC,
    TEXT_EDITOR_TOOLBAR.TYPE.UNDERLINED,
    TEXT_EDITOR_TOOLBAR.TYPE.SIZE,
    TEXT_EDITOR_TOOLBAR.TYPE.COLOR_TEXT,
  ];

  items_align: IToolBarButton[] = [
    TEXT_EDITOR_TOOLBAR.TYPE.ALIGN_CENTER,
    TEXT_EDITOR_TOOLBAR.TYPE.ALIGN_JUSTIFY,
    TEXT_EDITOR_TOOLBAR.TYPE.ALIGN_LEFT,
    TEXT_EDITOR_TOOLBAR.TYPE.ALIGN_RIGHT,
  ];

  constructor() { }

  ngOnInit() {

  }
}
