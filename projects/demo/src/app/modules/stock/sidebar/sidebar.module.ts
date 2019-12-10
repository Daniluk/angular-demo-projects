import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarRoutingModule } from './sidebar-routing.module';
import { SidebarComponent } from './sidebar.component';
import { BasketComponent } from '../basket/basket.component';
import { LocationComponent } from '../location/location.component';
import { DemoMaterialModule } from 'projects/shared-modules/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    SidebarComponent,
    BasketComponent,
    LocationComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    DemoMaterialModule,
    SidebarRoutingModule
  ],
  exports: [
    SidebarComponent,
    BasketComponent,
    LocationComponent
]
})
export class SidebarModule { }
