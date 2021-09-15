import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionPreAuditCasesRegisterReportComponent } from './pension-pre-audit-cases-register-report.component';

describe('PensionPreAuditCasesRegisterReportComponent', () => {
  let component: PensionPreAuditCasesRegisterReportComponent;
  let fixture: ComponentFixture<PensionPreAuditCasesRegisterReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PensionPreAuditCasesRegisterReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionPreAuditCasesRegisterReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
