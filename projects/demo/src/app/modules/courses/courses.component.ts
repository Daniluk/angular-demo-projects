import { Component, OnInit } from '@angular/core';
import * as fromCourses from './store/courses.reducer';
import { Store, select } from '@ngrx/store';
import { AllCoursesRequested } from './store/courses.actions';
import { Observable } from 'rxjs';
import { ICourse } from './interfaces/ICourse';
import { selectBeginnerCourses, selectAdvancedCourses, selectPromoTotal } from './store/courses.selectors';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  promoTotal$: Observable<number>;
  beginnerCourses$: Observable<ICourse[]>;
  advancedCourses$: Observable<ICourse[]>;

  constructor(
    private store: Store<fromCourses.CoursesState>
  ) {

  }

  ngOnInit() {
    this.store.dispatch(new AllCoursesRequested());
    this.beginnerCourses$ = this.store.pipe(
      tap(data => console.log('_', data)),
      select(selectBeginnerCourses));
    this.advancedCourses$ = this.store.pipe(select(selectAdvancedCourses));
    this.promoTotal$ = this.store.pipe(select(selectPromoTotal));
  }
}
