import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DemoMaterialModule } from '../../../../../shared-modules/material-module';
import { LocaleDateComponent } from './locale-date.component';

describe('LocaleDateComponent', () => {
  let component: LocaleDateComponent;
  let fixture: ComponentFixture<LocaleDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DemoMaterialModule,
        HttpClientTestingModule,
      ],
      declarations: [ LocaleDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaleDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
