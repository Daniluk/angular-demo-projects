import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetTitleAndMetaComponent } from './set-title-and-meta.component';
import { SetTitleAndMetaService } from './set-title-and-meta.service';

@NgModule({
  declarations: [SetTitleAndMetaComponent],
  imports: [
    CommonModule
  ],
  exports: [SetTitleAndMetaComponent],
  providers: [SetTitleAndMetaService]
})
export class SetTitleAndMetaModule { }
