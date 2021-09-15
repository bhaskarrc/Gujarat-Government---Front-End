import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpfInterestEightThreeThreeSixStatementReportComponent } from './gpf-interest-eight-three-three-six-statement-report.component';

describe('GpfInterestEightThreeThreeSixStatementReportComponent', () => {
  let component: GpfInterestEightThreeThreeSixStatementReportComponent;
  let fixture: ComponentFixture<GpfInterestEightThreeThreeSixStatementReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpfInterestEightThreeThreeSixStatementReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpfInterestEightThreeThreeSixStatementReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
