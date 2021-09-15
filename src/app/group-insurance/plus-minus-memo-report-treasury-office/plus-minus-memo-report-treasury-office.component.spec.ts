import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusMinusMemoReportTreasuryOfficeComponent } from './plus-minus-memo-report-treasury-office.component';

describe('PlusMinusMemoReportTreasuryOfficeComponent', () => {
  let component: PlusMinusMemoReportTreasuryOfficeComponent;
  let fixture: ComponentFixture<PlusMinusMemoReportTreasuryOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlusMinusMemoReportTreasuryOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusMinusMemoReportTreasuryOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
