import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleTwoPointOneComponent } from './schedule-two-point-one.component';

describe('ScheduleTwoPointOneComponent', () => {
  let component: ScheduleTwoPointOneComponent;
  let fixture: ComponentFixture<ScheduleTwoPointOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleTwoPointOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleTwoPointOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
