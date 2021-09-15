import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutOfControlAuditRegisterReportComponent } from './out-of-control-audit-register-report.component';

describe('OutOfControlAuditRegisterReportComponent', () => {
  let component: OutOfControlAuditRegisterReportComponent;
  let fixture: ComponentFixture<OutOfControlAuditRegisterReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutOfControlAuditRegisterReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutOfControlAuditRegisterReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
