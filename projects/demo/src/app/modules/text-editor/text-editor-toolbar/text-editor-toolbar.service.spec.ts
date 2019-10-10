import { TestBed } from '@angular/core/testing';

import { TextEditorToolbarService } from './text-editor-toolbar.service';

describe('TextEditorToolbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TextEditorToolbarService = TestBed.get(TextEditorToolbarService);
    expect(service).toBeTruthy();
  });
});
