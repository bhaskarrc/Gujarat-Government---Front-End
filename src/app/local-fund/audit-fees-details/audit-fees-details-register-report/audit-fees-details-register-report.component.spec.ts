import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditFeesDetailsRegisterReportComponent } from './audit-fees-details-register-report.component';

describe('AuditFeesDetailsRegisterReportComponent', () => {
  let component: AuditFeesDetailsRegisterReportComponent;
  let fixture: ComponentFixture<AuditFeesDetailsRegisterReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditFeesDetailsRegisterReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditFeesDetailsRegisterReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
