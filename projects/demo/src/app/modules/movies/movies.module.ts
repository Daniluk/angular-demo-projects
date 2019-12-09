import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MovieComponent } from './movie/movie.component';
import { DemoMaterialModule } from 'projects/shared-modules/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/reducers/movies.reducer';
import { MoviesEffects } from './state/effects/movies.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [MoviesComponent, MovieComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    DemoMaterialModule,
    MoviesRoutingModule,
    StoreModule.forFeature('movies', reducer),
    EffectsModule.forFeature([MoviesEffects])
  ]
})
export class MoviesModule { }
