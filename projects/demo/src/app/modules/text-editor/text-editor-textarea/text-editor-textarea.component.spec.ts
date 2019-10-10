import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorTextareaComponent } from './text-editor-textarea.component';

describe('TextEditorTextareaComponent', () => {
  let component: TextEditorTextareaComponent;
  let fixture: ComponentFixture<TextEditorTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextEditorTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextEditorTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
