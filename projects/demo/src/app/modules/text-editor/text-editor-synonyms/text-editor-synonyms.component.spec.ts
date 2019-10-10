import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorSynonymsComponent } from './text-editor-synonyms.component';

describe('TextEditorSynonymsComponent', () => {
  let component: TextEditorSynonymsComponent;
  let fixture: ComponentFixture<TextEditorSynonymsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextEditorSynonymsComponent ]
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
