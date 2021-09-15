import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreasuryReportForVerificationComponent } from './treasury-report-for-verification.component';

describe('TreasuryReportForVerificationComponent', () => {
  let component: TreasuryReportForVerificationComponent;
  let fixture: ComponentFixture<TreasuryReportForVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreasuryReportForVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreasuryReportForVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
