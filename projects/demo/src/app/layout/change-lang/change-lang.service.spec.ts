import { TestBed } from '@angular/core/testing';

import { ChangeLangService } from './change-lang.service';

describe('ChangeLangService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangeLangService = TestBed.get(ChangeLangService);
    expect(service).toBeTruthy();
  });
});
