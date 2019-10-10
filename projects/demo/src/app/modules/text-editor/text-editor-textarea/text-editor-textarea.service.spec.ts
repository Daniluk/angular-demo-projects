import { TestBed } from '@angular/core/testing';

import { TextEditorTextareaService } from './text-editor-textarea.service';

describe('TextEditorTextareaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TextEditorTextareaService = TestBed.get(TextEditorTextareaService);
    expect(service).toBeTruthy();
  });
});
