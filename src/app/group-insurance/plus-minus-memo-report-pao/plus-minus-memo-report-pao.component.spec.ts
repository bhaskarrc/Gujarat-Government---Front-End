import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusMinusMemoReportPaoComponent } from './plus-minus-memo-report-pao.component';

describe('PlusMinusMemoReportPaoComponent', () => {
  let component: PlusMinusMemoReportPaoComponent;
  let fixture: ComponentFixture<PlusMinusMemoReportPaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlusMinusMemoReportPaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusMinusMemoReportPaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
