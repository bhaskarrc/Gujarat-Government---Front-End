import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LrParaVerificationRegisterReportComponent } from './lr-para-verification-register-report.component';

describe('LrParaVerificationRegisterReportComponent', () => {
  let component: LrParaVerificationRegisterReportComponent;
  let fixture: ComponentFixture<LrParaVerificationRegisterReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LrParaVerificationRegisterReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LrParaVerificationRegisterReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
