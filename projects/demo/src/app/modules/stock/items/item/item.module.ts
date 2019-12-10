import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ItemComponent } from './item.component';
import { DemoMaterialModule } from '../../../../../../../shared-modules/material-module';

@NgModule({
  declarations: [ItemComponent],
  imports: [
    CommonModule,
    DemoMaterialModule,
    ItemRoutingModule
  ]
})
export class ItemModule { }
