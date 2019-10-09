import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoMaterialModule } from '../../../../../shared-modules/material-module';
import { AdvertisementComponent } from './advertisement.component';

describe('AdvertisementComponent', () => {
  let component: AdvertisementComponent;
  let fixture: ComponentFixture<AdvertisementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DemoMaterialModule
      ],
      declarations: [ AdvertisementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
