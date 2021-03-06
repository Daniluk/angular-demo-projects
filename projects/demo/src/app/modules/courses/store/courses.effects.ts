import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  AllCoursesLoaded,
  AllCoursesRequested,
  CourseActionTypes,
  CourseLoaded,
  CourseRequested, LessonsPageCancelled, LessonsPageLoaded,
  LessonsPageRequested
} from './courses.actions';
import { throwError, of } from 'rxjs';
import { catchError, concatMap, exhaustMap, filter, map, mergeMap, withLatestFrom, tap } from 'rxjs/operators';
import { CoursesService } from '../courses.service';
// import { State } from '../reducers';
import { select, Store } from '@ngrx/store';
import { allCoursesLoaded } from './courses.selectors';
import { CoursesState } from './courses.reducer';

@Injectable()
export class CourseEffects {

  @Effect()
  loadCourse$ = this.actions$
    .pipe(
      ofType<CourseRequested>(CourseActionTypes.CourseRequested),
      mergeMap(action => this.coursesService.findCourseById(action.payload.courseId)),
      map(course => new CourseLoaded({ course }))
    );

  @Effect()
  loadAllCourses$ = this.actions$
    .pipe(
      // tap(data => console.log(data)),
      ofType<AllCoursesRequested>(CourseActionTypes.AllCoursesRequested),
      withLatestFrom(this.store.pipe(select(allCoursesLoaded))),
      filter(([action, allCoursesLoaded]) => !allCoursesLoaded),
      mergeMap(() => this.coursesService.findAllCourses()),
      map(courses => new AllCoursesLoaded({ courses }))
    );


  // @Effect()
  // loadLessonsPage$ = this.actions$
  //   .pipe(
  //     ofType<LessonsPageRequested>(CourseActionTypes.LessonsPageRequested),
  //     mergeMap(({ payload }) =>
  //       this.coursesService.findLessons(payload.courseId,
  //         payload.page.pageIndex, payload.page.pageSize)
  //         .pipe(
  //           catchError(err => {
  //             console.log('error loading a lessons page ', err);
  //             this.store.dispatch(new LessonsPageCancelled());
  //             return of([]);
  //           })
  //         )

  //     ),
  //     map(lessons => new LessonsPageLoaded({ lessons }))
  //   );



  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private store: Store<CoursesState>) {

  }

}
