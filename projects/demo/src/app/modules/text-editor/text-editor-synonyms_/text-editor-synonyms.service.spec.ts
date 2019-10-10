import { TestBed } from '@angular/core/testing';

import { TextEditorSynonymsService } from './text-editor-synonyms.service';

describe('TextEditorSynonymsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TextEditorSynonymsService = TestBed.get(TextEditorSynonymsService);
    expect(service).toBeTruthy();
  });
});
