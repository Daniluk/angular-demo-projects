import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuSharedModuleComponent } from './eu-shared-module.component';

describe('EuSharedModuleComponent', () => {
  let component: EuSharedModuleComponent;
  let fixture: ComponentFixture<EuSharedModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuSharedModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuSharedModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
