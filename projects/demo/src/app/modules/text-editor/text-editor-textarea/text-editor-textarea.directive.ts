import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TEXT_EDITOR_TOOLBAR } from '../text-editor-toolbar/config/names';
import { ICommand, TYPE } from '../text-editor-toolbar/interfaces/ICommand';
import { TextEditorService } from '../text-editor.service';
import { TextEditorTextareaService } from './text-editor-textarea.service';

@Directive({
  selector: '[appTextEditorTextarea]'
})
export class TextEditorTextareaDirective implements OnInit {

  private parentTag: HTMLElement;
  private target: HTMLElement;
  private fragmentString: string;

  constructor(
    private el: ElementRef,
    private serviceTextEditor: TextEditorService,
    private service: TextEditorTextareaService,
  ) {
    this.addCommandSubscribe();
    this.addSynonymSubscribe();
    this.addListenerDoubleClick();
  }

  @HostListener('click', ['$event.target'])
  onClick(target) {
    if (target.hasAttribute('apptexteditortextarea')) {
      this.serviceTextEditor.setToolBarDefault();
      this.target = target;
    }
    if (!target.hasAttribute('apptexteditortextarea')) {
      let tag = target;
      let last;
      let parent: any;

      while (!tag.hasAttribute('apptexteditortextarea')) {
        parent = tag;
        this.parentTag = tag;
        const str = parent.innerHTML;
        last = tag.tagName.toLowerCase();
        this.fragmentString = `<${last}> ${str}</${last}>`;
        this.serviceTextEditor.setToolBarButtonClicked(tag.tagName);
        tag = tag.parentElement;
      }
    }
  }

  ngOnInit() {

  }

  private addCommandSubscribe(): void {
    this.serviceTextEditor.setCommand$.subscribe((data) => {
      const command = data as ICommand;
      if (command.TYPE === TYPE.ADD) {
        this.addTextFormat(command, this.target);
      }
      if (command.TYPE === TYPE.REMOVE) {
        this.removeTextFormat(command, this.parentTag, this.fragmentString);
      }
    });
  }

  private addSynonymSubscribe(): void {
    this.serviceTextEditor.setSynonym$.subscribe((data) => {
      const synonym = data as string;
      this.changeWord(synonym);
    });
  }

  private addListenerDoubleClick(): void {
    const observable = fromEvent(this.el.nativeElement, 'dblclick')
      .pipe(
        // debounceTime(1400),
        switchMap(() => {
          const range = window.getSelection().getRangeAt(0);
          const word: string = range.startContainer.textContent
            .slice(range.startOffset, range.endOffset);
          if (word.length < 2) {
            return;
          }
          return this.service.fetchItems(word);
        })
      );
    observable.subscribe((res: any[]) => {
      const items: string[] = res as string[];
      this.serviceTextEditor.setSynonyms(items);
    },
      (err) => console.log(err),
    );
  }

  private removeTextFormat(command: ICommand, parentTag: HTMLElement, fragmentString: string): void {
    let tag: string;
    switch (command.NAME) {
      case TEXT_EDITOR_TOOLBAR.TYPE.BOLD.BUTTON_NAME:
        tag = TEXT_EDITOR_TOOLBAR.TYPE.BOLD.TAG;
        break;
      case TEXT_EDITOR_TOOLBAR.TYPE.ITALIC.BUTTON_NAME:
        tag = TEXT_EDITOR_TOOLBAR.TYPE.ITALIC.TAG;
        break;
      case TEXT_EDITOR_TOOLBAR.TYPE.UNDERLINED.BUTTON_NAME:
        tag = TEXT_EDITOR_TOOLBAR.TYPE.UNDERLINED.TAG;
        break;
    }
    if (tag) {
      this.removeAppendElementToRange(tag, parentTag, fragmentString);
    }
  }

  private addTextFormat(command: ICommand, target: HTMLElement): void {
    let tag: string;
    switch (command.NAME) {
      case TEXT_EDITOR_TOOLBAR.TYPE.BOLD.BUTTON_NAME:
        tag = TEXT_EDITOR_TOOLBAR.TYPE.BOLD.TAG;
        break;
      case TEXT_EDITOR_TOOLBAR.TYPE.ITALIC.BUTTON_NAME:
        tag = TEXT_EDITOR_TOOLBAR.TYPE.ITALIC.TAG;
        break;
      case TEXT_EDITOR_TOOLBAR.TYPE.UNDERLINED.BUTTON_NAME:
        tag = TEXT_EDITOR_TOOLBAR.TYPE.UNDERLINED.TAG;
        break;
      case TEXT_EDITOR_TOOLBAR.TYPE.ALIGN_CENTER.BUTTON_NAME:
        tag = TEXT_EDITOR_TOOLBAR.TYPE.ALIGN_CENTER.VALUE;
        break;
      case TEXT_EDITOR_TOOLBAR.TYPE.ALIGN_JUSTIFY.BUTTON_NAME:
        tag = TEXT_EDITOR_TOOLBAR.TYPE.ALIGN_JUSTIFY.VALUE;
        break;
      case TEXT_EDITOR_TOOLBAR.TYPE.ALIGN_LEFT.BUTTON_NAME:
        tag = TEXT_EDITOR_TOOLBAR.TYPE.ALIGN_LEFT.VALUE;
        break;
      case TEXT_EDITOR_TOOLBAR.TYPE.ALIGN_RIGHT.BUTTON_NAME:
        tag = TEXT_EDITOR_TOOLBAR.TYPE.ALIGN_RIGHT.VALUE;
        break;
    }
    this.createAndAppendElementToRange(tag, target);
  }

  private createAndAppendElementToRange(tag: string, target: HTMLElement): void {
    if (window.getSelection().rangeCount > 0) {
      const range = window.getSelection().getRangeAt(0);
      const selectionContents = range.extractContents();
      if (selectionContents.textContent.length !== 0) {
        const el = document.createElement(tag);
        // el.style.color = color;
        el.appendChild(selectionContents);
        range.insertNode(el);
      }
      if (target.hasAttribute('apptexteditortextarea')) {
        target.style.textAlign = tag;
      }
    }
  }

  private changeWord(value: string): void {
    if (window.getSelection().rangeCount > 0) {
      const range = window.getSelection().getRangeAt(0);
      const node = document.createTextNode(`${value} `);
      range.deleteContents();
      range.insertNode(node);
    }
  }

  private removeAppendElementToRange(tag: string, parentTag: HTMLElement, fragmentString: string): void {
    if (window.getSelection().rangeCount > 0) {
      const range = window.getSelection().getRangeAt(0);
      const re = new RegExp(`<[/]*${tag}>`, 'ig');
      let node;
      if (fragmentString) {
        const res = fragmentString.replace(re, '');
        node = range.createContextualFragment(res);
        if (parentTag.parentElement) {
          parentTag.parentElement.replaceChild(node, parentTag);
        }
      }
      if (range) {
        const extractContents = window.getSelection().getRangeAt(0).extractContents();
        if (extractContents.firstElementChild) {
          node = range.createContextualFragment(extractContents.firstElementChild.innerHTML);
          range.insertNode(node);
        }
      }
    }
  }
}
