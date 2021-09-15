import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleFourLoanReceivedReportComponent } from './schedule-four-loan-received-report.component';

describe('ScheduleFourLoanReceivedReportComponent', () => {
  let component: ScheduleFourLoanReceivedReportComponent;
  let fixture: ComponentFixture<ScheduleFourLoanReceivedReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleFourLoanReceivedReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleFourLoanReceivedReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
