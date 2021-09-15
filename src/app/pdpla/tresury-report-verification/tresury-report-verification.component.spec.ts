import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresuryReportVerificationComponent } from './tresury-report-verification.component';

describe('TresuryReportVerificationComponent', () => {
  let component: TresuryReportVerificationComponent;
  let fixture: ComponentFixture<TresuryReportVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresuryReportVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresuryReportVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
