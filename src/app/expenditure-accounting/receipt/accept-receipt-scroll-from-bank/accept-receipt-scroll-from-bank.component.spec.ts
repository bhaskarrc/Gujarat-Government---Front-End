import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptReceiptScrollFromBankComponent } from './accept-receipt-scroll-from-bank.component';

describe('AcceptReceiptScrollFromBankComponent', () => {
  let component: AcceptReceiptScrollFromBankComponent;
  let fixture: ComponentFixture<AcceptReceiptScrollFromBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptReceiptScrollFromBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptReceiptScrollFromBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
