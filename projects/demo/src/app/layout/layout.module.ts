import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoMaterialModule } from '../../../../shared-modules/material-module';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { HeaderComponent } from './header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TitleComponent } from './title/title.component';
import { ChangeLangComponent } from './change-lang/change-lang.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    DemoMaterialModule,
  ],
  exports: [],
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    ChangeLangComponent,
    SidebarComponent,
    TitleComponent,
    AdvertisementComponent,
  ]
})
export class LayoutModule {
  constructor() {
  }
}
