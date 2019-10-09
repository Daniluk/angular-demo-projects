import { TestBed } from '@angular/core/testing';

import { EuSharedModuleService } from './eu-shared-module.service';

describe('EuSharedModuleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EuSharedModuleService = TestBed.get(EuSharedModuleService);
    expect(service).toBeTruthy();
  });
});
