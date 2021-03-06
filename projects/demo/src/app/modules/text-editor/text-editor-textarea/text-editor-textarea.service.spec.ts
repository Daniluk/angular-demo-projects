import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TextEditorTextareaService } from './text-editor-textarea.service';

describe('TextEditorTextareaService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: TextEditorTextareaService = TestBed.get(TextEditorTextareaService);
    expect(service).toBeTruthy();
  });
});
