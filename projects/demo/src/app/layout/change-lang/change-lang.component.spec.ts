import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DemoMaterialModule } from '../../../../../shared-modules/material-module';
import { VSTranslateModule } from '../../../../../shared-modules/translate/vs-translate.module';
import { ChangeLangComponent } from './change-lang.component';

describe('ChangeLangComponent', () => {
  let component: ChangeLangComponent;
  let fixture: ComponentFixture<ChangeLangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([]),
        VSTranslateModule,
        DemoMaterialModule,
        HttpClientTestingModule,
      ],
      declarations: [ChangeLangComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
