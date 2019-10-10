import { ElementRef } from '@angular/core';
import { inject } from '@angular/core/testing';
import { TextEditorService } from '../text-editor.service';
import { TextEditorTextareaDirective } from './text-editor-textarea.directive';
import { TextEditorTextareaService } from './text-editor-textarea.service';

describe('TextEditorTextareaDirective', () => {

  it('should create an instance', () => {
    inject([ElementRef, TextEditorService],
      (elementRef: ElementRef, serviceTextEditor: TextEditorService, service: TextEditorTextareaService) => {
        const directive = new TextEditorTextareaDirective(elementRef, serviceTextEditor, service);

        expect(directive).toBeTruthy();
      });
  });

});
