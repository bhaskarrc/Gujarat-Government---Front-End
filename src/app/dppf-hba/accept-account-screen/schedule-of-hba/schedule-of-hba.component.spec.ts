import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleOfHbaComponent } from './schedule-of-hba.component';

describe('ScheduleOfHbaComponent', () => {
  let component: ScheduleOfHbaComponent;
  let fixture: ComponentFixture<ScheduleOfHbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleOfHbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleOfHbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
