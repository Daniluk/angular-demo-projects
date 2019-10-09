import { TestBed } from '@angular/core/testing';

import { SetTitleAndMetaService } from './set-title-and-meta.service';

describe('SetTitleAndMetaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SetTitleAndMetaService = TestBed.get(SetTitleAndMetaService);
    expect(service).toBeTruthy();
  });
});
