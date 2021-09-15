import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptPaymentScrollFromBankComponent } from './accept-payment-scroll-from-bank.component';

describe('AcceptPaymentScrollFromBankComponent', () => {
  let component: AcceptPaymentScrollFromBankComponent;
  let fixture: ComponentFixture<AcceptPaymentScrollFromBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptPaymentScrollFromBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptPaymentScrollFromBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
