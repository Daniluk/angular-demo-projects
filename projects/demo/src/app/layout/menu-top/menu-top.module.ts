import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuTopRoutingModule } from './menu-top-routing.module';
import { MenuTopComponent } from './menu-top.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [MenuTopComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MenuTopRoutingModule
  ]
})
export class MenuTopModule { }
