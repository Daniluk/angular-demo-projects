import { reducer, initialJokesState } from './jokes.reducer';

describe('Jokes Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialJokesState, action);

      expect(result).toBe(initialJokesState);
    });
  });
});
