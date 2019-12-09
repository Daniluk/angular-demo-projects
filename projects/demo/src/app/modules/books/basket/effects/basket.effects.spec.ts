import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { BasketEffects } from './basket.effects';

describe('BasketEffects', () => {
  let actions$: Observable<any>;
  let effects: BasketEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BasketEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<BasketEffects>(BasketEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
