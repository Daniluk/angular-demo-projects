import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatInputModule } from '@angular/material';
import { DemoMaterialModule } from '../../../../shared-modules/material-module';
import { ThemePickerComponent } from '../../../../shared-modules/theme-picker/theme-picker.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ChangeLangComponent } from './change-lang/change-lang.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MenuTopComponent } from './menu-top/menu-top.component';
import { SearchComponent } from './search/search.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FlexLayoutModule,
    DemoMaterialModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  exports: [],
  declarations: [
    MainLayoutComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ChangeLangComponent,
    SearchComponent,
    TitleComponent,
    MenuTopComponent,
    AuthenticationComponent,
    ThemePickerComponent,
    AdvertisementComponent
  ]
})
export class LayoutModule {
  constructor() {

  }
}
