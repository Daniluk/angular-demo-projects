import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, from } from 'rxjs';

import { MoviesEffects } from './movies.effects';

describe('MoviesEffects', () => {
  let actions$: Observable<any>;
  let effects: MoviesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MoviesEffects,
        provideMockActions(() => actions$)
      ]
    });
    actions$ = of({ type: 'Action One' });
    effects = TestBed.get<MoviesEffects>(MoviesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
