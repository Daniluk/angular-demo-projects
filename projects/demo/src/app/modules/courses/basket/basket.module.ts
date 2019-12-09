import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { BasketComponent } from './basket.component';
import { DemoMaterialModule } from 'projects/shared-modules/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/basket.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BasketEffects } from './effects/basket.effects';


@NgModule({
  declarations: [BasketComponent],
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    BasketRoutingModule,
    StoreModule.forFeature('basket', reducer),
    EffectsModule.forFeature([BasketEffects])
  ]
})
export class BasketModule { }
