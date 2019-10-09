import { TestBed } from '@angular/core/testing';

import { SidebarService } from './sidebar.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DemoMaterialModule } from 'projects/shared-modules/material-module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SidebarService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      BrowserAnimationsModule,
      RouterTestingModule.withRoutes([]),
      DemoMaterialModule,
      HttpClientTestingModule,
    ],
  }));

  it('should be created', () => {
    const service: SidebarService = TestBed.get(SidebarService);
    expect(service).toBeTruthy();
  });
});
