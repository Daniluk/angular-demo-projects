import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseComponent } from './course/course.component';
import { BasketComponent } from './basket/basket.component';
import { DemoMaterialModule } from 'projects/shared-modules/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { reducer } from './basket/reducers/basket.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BasketEffects } from './basket/effects/basket.effects';
import { CourseEffects } from './store/courses.effects';
import * as fromCourses from './store/courses.reducer';
import { BasketModule } from '../stock/basket/basket.module';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CoursesListComponent,
    CourseComponent,
    CoursesCardListComponent,
    // BasketComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    DemoMaterialModule,
    CoursesRoutingModule,
    BasketModule,
    StoreModule.forFeature('courses', fromCourses.coursesReducer), // ?
    EffectsModule.forFeature([CourseEffects])
    // StoreModule.forFeature('basket', reducer),
    // EffectsModule.forFeature([BasketEffects])
  ]
})
export class CoursesModule { }
