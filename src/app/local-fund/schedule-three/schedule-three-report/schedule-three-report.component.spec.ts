import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleThreeReportComponent } from './schedule-three-report.component';

describe('ScheduleThreeReportComponent', () => {
  let component: ScheduleThreeReportComponent;
  let fixture: ComponentFixture<ScheduleThreeReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleThreeReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleThreeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
