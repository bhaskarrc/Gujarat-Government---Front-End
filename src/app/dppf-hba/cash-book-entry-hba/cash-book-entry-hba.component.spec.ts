import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashBookEntryHbaComponent } from './cash-book-entry-hba.component';

describe('CashBookEntryHbaComponent', () => {
  let component: CashBookEntryHbaComponent;
  let fixture: ComponentFixture<CashBookEntryHbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashBookEntryHbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashBookEntryHbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
