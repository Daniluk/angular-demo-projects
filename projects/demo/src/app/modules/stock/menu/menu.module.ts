import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { DemoMaterialModule } from '../../../../../../shared-modules/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidebarModule } from '../sidebar/sidebar.module';

@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    DemoMaterialModule,
    MenuRoutingModule,
    SidebarModule
  ]
})
export class MenuModule { }
