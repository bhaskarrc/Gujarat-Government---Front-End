import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleWiseOnAuditDutyOfficerDetailsReportComponent } from './circle-wise-on-audit-duty-officer-details-report.component';

describe('CircleWiseOnAuditDutyOfficerDetailsReportComponent', () => {
  let component: CircleWiseOnAuditDutyOfficerDetailsReportComponent;
  let fixture: ComponentFixture<CircleWiseOnAuditDutyOfficerDetailsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleWiseOnAuditDutyOfficerDetailsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleWiseOnAuditDutyOfficerDetailsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
