import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TextEditorSynonymsService } from './text-editor-synonyms.service';

describe('TextEditorSynonymsService', () => {
  let service: TextEditorSynonymsService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [TextEditorSynonymsService],
  }));

  it('should be created', () => {
    service = TestBed.get(TextEditorSynonymsService);
    expect(service).toBeTruthy();
  });
});
