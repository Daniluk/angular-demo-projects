import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorSynonymsComponent } from './text-editor-synonyms.component';
import { TextEditorSynonymsDirective } from './text-editor-synonyms.directive';

describe('TextEditorSynonymsComponent', () => {
  let component: TextEditorSynonymsComponent;
  let fixture: ComponentFixture<TextEditorSynonymsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextEditorSynonymsComponent, TextEditorSynonymsDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextEditorSynonymsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
