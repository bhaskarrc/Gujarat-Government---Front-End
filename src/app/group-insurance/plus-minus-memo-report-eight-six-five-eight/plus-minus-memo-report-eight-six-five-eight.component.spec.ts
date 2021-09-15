import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusMinusMemoReportEightSixFiveEightComponent } from './plus-minus-memo-report-eight-six-five-eight.component';

describe('PlusMinusMemoReportEightSixFiveEightComponent', () => {
  let component: PlusMinusMemoReportEightSixFiveEightComponent;
  let fixture: ComponentFixture<PlusMinusMemoReportEightSixFiveEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlusMinusMemoReportEightSixFiveEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusMinusMemoReportEightSixFiveEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
