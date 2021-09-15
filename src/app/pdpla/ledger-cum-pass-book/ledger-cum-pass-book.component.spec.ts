import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerCumPassBookComponent } from './ledger-cum-pass-book.component';

describe('LedgerCumPassBookComponent', () => {
  let component: LedgerCumPassBookComponent;
  let fixture: ComponentFixture<LedgerCumPassBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedgerCumPassBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgerCumPassBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
