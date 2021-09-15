import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerCumPassBookComparisonComponent } from './ledger-cum-pass-book-comparison.component';

describe('LedgerCumPassBookComparisonComponent', () => {
  let component: LedgerCumPassBookComparisonComponent;
  let fixture: ComponentFixture<LedgerCumPassBookComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedgerCumPassBookComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgerCumPassBookComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
