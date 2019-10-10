import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DemoMaterialModule } from '../../../../../shared-modules/material-module';
import { ChangeLangService } from './change-lang.service';

describe('ChangeLangService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      DemoMaterialModule,
      HttpClientTestingModule,
    ],

  }));

  it('should be created', () => {
    const service: ChangeLangService = TestBed.get(ChangeLangService);
    expect(service).toBeTruthy();
  });
});
