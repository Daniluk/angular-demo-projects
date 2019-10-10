import { ElementRef } from '@angular/core';
import { inject } from '@angular/core/testing';
import { TextEditorService } from '../text-editor.service';
import { TextEditorSynonymsDirective } from './text-editor-synonyms.directive';

describe('TextEditorSynonymsDirective', () => {
  it('should create an instance', () => {
    inject([ElementRef, TextEditorService], (elementRef: ElementRef, service: TextEditorService) => {
      const directive = new TextEditorSynonymsDirective(elementRef, service);

      expect(directive).toBeTruthy();
    });
  });
});

