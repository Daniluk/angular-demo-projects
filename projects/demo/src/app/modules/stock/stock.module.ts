import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { StockComponent } from './stock.component';
import { StockDirective } from './stock.directive';
import { DemoMaterialModule } from '../../../../../shared-modules/material-module';
import { MainComponent } from './components/main/main.component';
import { MainDirective } from './components/main/main.directive';


@NgModule({
  declarations: [StockComponent, StockDirective, MainComponent, MainDirective],
  imports: [
    CommonModule,
    DemoMaterialModule,
    StockRoutingModule
  ]
})
export class StockModule { }
