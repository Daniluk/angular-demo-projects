import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DemoMaterialModule } from '../../../../../shared-modules/material-module';
import { TitleComponent } from './title.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CONFIG } from '../../../config/config';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([]),
        DemoMaterialModule,
        HttpClientTestingModule,
      ],
      declarations: [ TitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'demo'`, () => {
    fixture = TestBed.createComponent(TitleComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('demo');
  });

  it('should render title', () => {
    fixture = TestBed.createComponent(TitleComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('demo');
  });
});
