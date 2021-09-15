import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditSupervisionRegisterReportComponent } from './audit-supervision-register-report.component';

describe('AuditSupervisionRegisterReportComponent', () => {
  let component: AuditSupervisionRegisterReportComponent;
  let fixture: ComponentFixture<AuditSupervisionRegisterReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditSupervisionRegisterReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditSupervisionRegisterReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
