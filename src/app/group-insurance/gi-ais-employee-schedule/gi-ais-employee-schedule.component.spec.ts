import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiAisEmployeeScheduleComponent } from './gi-ais-employee-schedule.component';

describe('GiAisEmployeeScheduleComponent', () => {
  let component: GiAisEmployeeScheduleComponent;
  let fixture: ComponentFixture<GiAisEmployeeScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiAisEmployeeScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiAisEmployeeScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
