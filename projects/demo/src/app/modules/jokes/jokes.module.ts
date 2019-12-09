import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JokesRoutingModule } from './jokes-routing.module';
import { JokesComponent } from './jokes.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromJokes from './state/jokes.reducer';
import { JokesEffects } from './state/jokes.effects';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DemoMaterialModule } from '../../../../../shared-modules/material-module';

@NgModule({
  declarations: [JokesComponent],
  imports: [
    CommonModule,
    JokesRoutingModule,
    FlexLayoutModule,
    DemoMaterialModule,
    StoreModule.forFeature(fromJokes.jokesFeatureKey, fromJokes.reducer),
    EffectsModule.forFeature([JokesEffects])
  ]
})
export class JokesModule { }
