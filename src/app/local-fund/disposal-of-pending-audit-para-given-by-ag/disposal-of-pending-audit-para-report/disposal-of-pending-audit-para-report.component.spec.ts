import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisposalOfPendingAuditParaReportComponent } from './disposal-of-pending-audit-para-report.component';

describe('DisposalOfPendingAuditParaReportComponent', () => {
  let component: DisposalOfPendingAuditParaReportComponent;
  let fixture: ComponentFixture<DisposalOfPendingAuditParaReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisposalOfPendingAuditParaReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisposalOfPendingAuditParaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
