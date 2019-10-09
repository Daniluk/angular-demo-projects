import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTitleAndMetaComponent } from './set-title-and-meta.component';

describe('SetTitleAndMetaComponent', () => {
  let component: SetTitleAndMetaComponent;
  let fixture: ComponentFixture<SetTitleAndMetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetTitleAndMetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetTitleAndMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
