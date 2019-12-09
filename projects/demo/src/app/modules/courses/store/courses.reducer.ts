import { ICourse } from '../interfaces/ICourse';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { CourseActions, CourseActionTypes } from './courses.actions';

export interface CoursesState extends EntityState<ICourse> {
  allCoursesLoaded: boolean;
}

export const adapter: EntityAdapter<ICourse> =
  createEntityAdapter<ICourse>();

export const initialCoursesState: CoursesState = adapter.getInitialState({
  allCoursesLoaded: false
});

export function coursesReducer(state = initialCoursesState, action: CourseActions): CoursesState {

  switch (action.type) {

    case CourseActionTypes.CourseLoaded:

      return adapter.addOne(action.payload.course, state);

    case CourseActionTypes.AllCoursesLoaded:

      return adapter.addAll(action.payload.courses, { ...state, allCoursesLoaded: true });

    case CourseActionTypes.CourseSaved:

      return adapter.updateOne(action.payload.course, state);

    default: {

      return state;
    }

  }
}


export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal

} = adapter.getSelectors();

