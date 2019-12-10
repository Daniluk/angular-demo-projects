import { coursesReducer, initialCoursesState } from './courses.reducer';

describe('Courses Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = coursesReducer(initialCoursesState, action);

      expect(result).toBe(initialCoursesState);
    });
  });
});
