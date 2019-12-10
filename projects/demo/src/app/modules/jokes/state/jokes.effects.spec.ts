import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { JokesEffects } from './jokes.effects';

describe('JokesEffects', () => {
  let actions$: Observable<any>;
  let effects: JokesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        JokesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<JokesEffects>(JokesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
