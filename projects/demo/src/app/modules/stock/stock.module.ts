import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { StockComponent } from './stock.component';
import { StockDirective } from './stock.directive';
import { DemoMaterialModule } from '../../../../../shared-modules/material-module';
import { MainComponent } from './components/main/main.component';
import { MainDirective } from './components/main/main.directive';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromStore from './state/reducers/stock.reducer';
import { StockEffects } from './state/effects/stock.effects';

@NgModule({
  declarations: [StockComponent, StockDirective, MainComponent, MainDirective],
  imports: [
    CommonModule,
    DemoMaterialModule,
    StockRoutingModule,
    // StoreModule.forFeature('basket', reducer),
    // EffectsModule.forFeature([BasketEffects]),
    StoreModule.forFeature(fromStore.stockFeatureKey, fromStore.reducer),
    EffectsModule.forFeature([StockEffects])
  ]
})
export class StockModule { }
