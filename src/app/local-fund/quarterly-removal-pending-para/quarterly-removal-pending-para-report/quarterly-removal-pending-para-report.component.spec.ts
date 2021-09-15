import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterlyRemovalPendingParaReportComponent } from './quarterly-removal-pending-para-report.component';

describe('QuarterlyRemovalPendingParaReportComponent', () => {
  let component: QuarterlyRemovalPendingParaReportComponent;
  let fixture: ComponentFixture<QuarterlyRemovalPendingParaReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuarterlyRemovalPendingParaReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarterlyRemovalPendingParaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
