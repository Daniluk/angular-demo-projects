import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoMaterialModule } from '../../shared-modules/material-module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    DemoMaterialModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
