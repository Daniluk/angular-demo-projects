import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoMaterialModule } from '../../../../../shared-modules/material-module';
import { MainComponent } from './main.component';


describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        // NoopAnimationsModule,
        // VSTranslateModule,
        // NgxsModule.forRoot([UserState]),
        DemoMaterialModule,
        // ComponentsModule,
        // ReactiveFormsModule,
        HttpClientTestingModule,
      ],
      providers: [

      ],
      declarations: [MainComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
