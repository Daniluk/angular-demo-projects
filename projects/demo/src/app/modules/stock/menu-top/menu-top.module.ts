import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuTopRoutingModule } from './menu-top-routing.module';
import { MenuTopComponent } from './menu-top.component';

@NgModule({
  declarations: [MenuTopComponent],
  imports: [
    CommonModule,
    MenuTopRoutingModule
  ],
  exports: [MenuTopComponent]
})
export class MenuTopModule { }
