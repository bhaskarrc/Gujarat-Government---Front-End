import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleFiveIncomeReportComponent } from './schedule-five-income-report.component';

describe('ScheduleFiveIncomeReportComponent', () => {
  let component: ScheduleFiveIncomeReportComponent;
  let fixture: ComponentFixture<ScheduleFiveIncomeReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleFiveIncomeReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleFiveIncomeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
