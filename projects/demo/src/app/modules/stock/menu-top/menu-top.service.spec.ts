import { TestBed } from '@angular/core/testing';

import { MenuTopService } from './menu-top.service';

describe('MenuTopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuTopService = TestBed.get(MenuTopService);
    expect(service).toBeTruthy();
  });
});
