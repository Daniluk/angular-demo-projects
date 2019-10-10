import { ElementRef, Renderer2 } from '@angular/core';
import { ComponentFixture, inject } from '@angular/core/testing';
import { TextEditorService } from '../text-editor.service';
import { TextEditorToolbarComponent } from './text-editor-toolbar.component';
import { TextEditorToolbarDirective } from './text-editor-toolbar.directive';

describe('TextEditorToolbarDirective', () => {
  // it('should create an instance', () => {
  //   // const directive = new TextEditorToolbarDirective();
  //   // expect(directive).toBeTruthy();
  // });

  it('should create an instance', () => {
    inject([ElementRef, TextEditorService],
      (elementRef: ElementRef, service: TextEditorService, renderer: Renderer2) => {
        const directive = new TextEditorToolbarDirective(elementRef, service, renderer);

        expect(directive).toBeTruthy();
      });
  });
});
