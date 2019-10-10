import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { TextEditorService } from '../text-editor.service';

@Component({
  selector: 'app-text-editor-synonyms',
  templateUrl: './text-editor-synonyms.component.html',
  styleUrls: ['./text-editor-synonyms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextEditorSynonymsComponent implements OnInit {
  @Input()
  synonyms: string[];

  constructor(
    private serviceTextEditor: TextEditorService,
    private cdr: ChangeDetectorRef
  ) {
    this.addSynonymsSubscribe();
  }

  ngOnInit() {

  }

  private addSynonymsSubscribe(): void {
    this.serviceTextEditor.setSynonyms$.subscribe((data) => {
      const items = data as string[];
      this.synonyms = [...items];
      this.cdr.detectChanges();
    });
  }
}
