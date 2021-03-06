import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoMaterialModule } from '../../../../../../shared-modules/material-module';
import { TextEditorToolbarComponent } from './text-editor-toolbar.component';

describe('TextEditorToolbarComponent', () => {
  let component: TextEditorToolbarComponent;
  let fixture: ComponentFixture<TextEditorToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextEditorToolbarComponent],
      imports: [
        DemoMaterialModule,
      ],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextEditorToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
