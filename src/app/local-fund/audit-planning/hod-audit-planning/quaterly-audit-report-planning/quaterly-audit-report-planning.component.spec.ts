import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuaterlyAuditReportPlanningComponent } from './quaterly-audit-report-planning.component';

describe('QuaterlyAuditReportPlanningComponent', () => {
  let component: QuaterlyAuditReportPlanningComponent;
  let fixture: ComponentFixture<QuaterlyAuditReportPlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuaterlyAuditReportPlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuaterlyAuditReportPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
