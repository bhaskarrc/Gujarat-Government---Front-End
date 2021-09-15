import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiEmployeeScheduleComponent } from './gi-employee-schedule.component';

describe('GiEmployeeScheduleComponent', () => {
  let component: GiEmployeeScheduleComponent;
  let fixture: ComponentFixture<GiEmployeeScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiEmployeeScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiEmployeeScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
