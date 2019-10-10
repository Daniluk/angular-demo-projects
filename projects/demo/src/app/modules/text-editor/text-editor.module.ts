import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextEditorRoutingModule } from './text-editor-routing.module';
import { TextEditorComponent } from './text-editor.component';
import { TextEditorDirective } from './text-editor.directive';
import { TextEditorToolbarComponent } from './text-editor-toolbar/text-editor-toolbar.component';
import { TextEditorToolbarDirective } from './text-editor-toolbar/text-editor-toolbar.directive';
import { TextEditorTextareaComponent } from './text-editor-textarea/text-editor-textarea.component';
import { TextEditorTextareaDirective } from './text-editor-textarea/text-editor-textarea.directive';
import { TextEditorSynonymsComponent } from './text-editor-synonyms/text-editor-synonyms.component';
import { TextEditorSynonymsDirective } from './text-editor-synonyms/text-editor-synonyms.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../../../../../shared-modules/material-module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TextEditorComponent,
    TextEditorDirective,
    TextEditorToolbarComponent,
    TextEditorToolbarDirective,
    TextEditorTextareaComponent,
    TextEditorTextareaDirective,
    TextEditorSynonymsComponent,
    TextEditorSynonymsDirective],
  imports: [
    CommonModule,
    TextEditorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    HttpClientModule,
  ]
})
export class TextEditorModule { }
