import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { DemoMaterialModule } from '../../../../../../shared-modules/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarModule } from '../sidebar/sidebar.module';


@NgModule({
  declarations: [ItemsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    DemoMaterialModule,
    ItemsRoutingModule,
    SidebarModule
  ]
})
export class ItemsModule { }
