import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { fromEvent, of } from 'rxjs';
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
  private color: string;
  private range: Range;

  constructor(
    private el: ElementRef,
    private serviceTextEditor: TextEditorService,
    private service: TextEditorTextareaService,
  ) {
    this.addCommandSubscribe();
    this.addFontColorSubscribe();
    this.addSynonymSubscribe();
    this.addListenerDoubleClick();
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    if (window.getSelection().rangeCount > 0) {
      this.range = window.getSelection().getRangeAt(0);
      const word: string = this.range.startContainer.textContent
        .slice(this.range.startOffset, this.range.endOffset);
      console.log('mouseUp', this.range.startContainer.parentElement);
      if (word.length > 0) {

      }
      this.parentTag = this.range.startContainer.parentElement;
    }
  }

  @HostListener('click', ['$event.target'])
  onClick(target) {
    this.serviceTextEditor.setToolBarDefault();
    if (target.parentElement.hasAttribute('apptexteditortextarea')) {
      this.target = target;
    }
    if (!target.parentElement.hasAttribute('apptexteditortextarea')) {
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
    // console.log(this.parentTag, this.target, target.parentElement, this.range.startContainer);
  }

  ngOnInit() {

  }

  private addCommandSubscribe(): void {
    this.serviceTextEditor.setCommand$.subscribe((data) => {
      const command = data as ICommand;
      console.log(command.NAME);

      if (command.TYPE === TYPE.ADD) {
        this.addTextFormat(command, this.target);
      }
      if (command.TYPE === TYPE.REMOVE) {
        this.removeTextFormat(command, this.parentTag, this.fragmentString);
      }
    });
  }

  private addFontColorSubscribe(): void {
    this.serviceTextEditor.setFontColor$.subscribe((data) => {
      this.color = data as string;
      this.changeTextColor(this.range, this.color);
      // this.changeTextColor(this.target, this.color);
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
        switchMap((req) => {
          const range = window.getSelection().getRangeAt(0);
          const word: string = range.startContainer.textContent
            .slice(range.startOffset, range.endOffset);
          if (word.length < 2) {
            return of({});
          }
          return this.service.fetchItems(word);
        })
      );
    observable.subscribe((res: any[]) => {
      const items: string[] = res as string[];
      if (items.length > 0) {
        this.serviceTextEditor.setSynonyms(items);
      }
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
    if (!tag) {
      return;
    }
    console.log(target, tag);
    if (window.getSelection().rangeCount > 0) {
      const range = window.getSelection().getRangeAt(0);
      const selectionContents = range.extractContents();
      if (selectionContents.textContent.length !== 0) {
        const el = document.createElement(tag);
        el.appendChild(selectionContents);
        range.insertNode(el);
      }
      if (target.parentElement.hasAttribute('apptexteditortextarea')) {
        target.parentElement.style.textAlign = tag;
      }
    }
  }

  private changeTextColor(range: Range, color: string): void {
    const word: string = range.startContainer.textContent
      .slice(range.startOffset, range.endOffset);

    const selectionContents = range.cloneContents();
    console.log(this.target);
    if (this.target && this.target.textContent !== word) {
      const el = document.createElement('font');
      el.setAttribute('color', color);
      el.textContent = selectionContents.textContent;
      range.deleteContents();
      range.insertNode(el);
    } else {
      // console.log(range.startContainer.parentElement.parentElement.hasAttribute('apptexteditortextarea'));
      this.parentTag.setAttribute('color', color);
    }
  }

  // private changeTextColorTemp(parentTag: HTMLElement, color: string): void {
  //   const range = window.getSelection().getRangeAt(0);
  //   const word: string = range.startContainer.textContent
  //     .slice(range.startOffset, range.endOffset);
  //   if (word.length < 2) {
  //     if (this.target.tagName === 'FONT') {
  //       this.target.setAttribute('color', color);
  //     }
  //   } else {
  //     const selectionContents = range.cloneContents();
  //     console.log(parentTag.parentElement);
  //     if (parentTag.tagName === 'FONT' && !parentTag.parentElement.hasAttribute('apptexteditortextarea')) {
  //       parentTag.setAttribute('color', color);
  //       console.log(parentTag.textContent, selectionContents.textContent);
  //       if (parentTag.textContent !== selectionContents.textContent) {
  //         const el = document.createElement('font');
  //         el.setAttribute('color', color);
  //         el.textContent = selectionContents.textContent;
  //         range.deleteContents();
  //         range.insertNode(el);
  //       }
  //     } else {
  //       // const el = document.createElement('font');
  //       // el.setAttribute('color', color);
  //       // el.textContent = selectionContents.textContent;
  //       // range.deleteContents();
  //       // range.insertNode(el);
  //     }
  //     // console.log(word);
  //     console.log(parentTag);
  //   }
  //   console.log(window.getSelection().rangeCount);
  //   // const range = window.getSelection().getRangeAt(0);
  //   // const selectionContents = range.cloneContents();
  //   // const tag = 'font';
  //   // const re = new RegExp(`<[/]*${tag}>`, 'ig');
  //   // let node;
  //   // if (parentTag && parentTag.outerHTML) {
  //   //   const res = parentTag.outerHTML.replace(re, '');
  //   //   node = range.createContextualFragment(res);
  //   //   // }
  //   //   console.log(window.getSelection().rangeCount);
  //   //   // const el = document.createElement('font');
  //   //   // el.style.color = color;
  //   //   // //

  //   //   // if (parentTag && parentTag.parentElement) {
  //   //   //   node.appendChild(el);
  //   //   parentTag.parentElement.replaceChild(node, parentTag);
  //   // } else {
  //   //   // el.textContent = selectionContents.textContent;
  //   //   // range.insertNode(el);
  //   //   const el = document.createElement('span');
  //   //   el.style.color = color;
  //   //   el.textContent = selectionContents.textContent;
  //   //   //  node.appendChild(el);
  //   //   range.deleteContents();
  //   //   range.insertNode(el);
  //   // }
  //   // // const el = document.createElement('span');
  //   // // el.style.color = color;
  //   // // el.textContent = selectionContents.textContent;
  //   // // node.appendChild(el);
  //   // // range.deleteContents();
  //   // // range.insertNode(node);
  // }

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
