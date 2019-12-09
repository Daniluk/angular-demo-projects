import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { BooksEffects } from './books.effects';

describe('BooksEffects', () => {
  let actions$: Observable<any>;
  let effects: BooksEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BooksEffects,
        provideMockActions(() => actions$)
      ]
    });
    actions$ = of({ type: 'Action One' });
    effects = TestBed.get<BooksEffects>(BooksEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
