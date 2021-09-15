import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayEndorsementReportComponent } from './pay-endorsement-report.component';

describe('PayEndorsementReportComponent', () => {
  let component: PayEndorsementReportComponent;
  let fixture: ComponentFixture<PayEndorsementReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayEndorsementReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayEndorsementReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
