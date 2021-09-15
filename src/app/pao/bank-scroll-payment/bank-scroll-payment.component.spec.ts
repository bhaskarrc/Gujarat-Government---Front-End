import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankScrollPaymentComponent } from './bank-scroll-payment.component';

describe('BankScrollPaymentComponent', () => {
  let component: BankScrollPaymentComponent;
  let fixture: ComponentFixture<BankScrollPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankScrollPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankScrollPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
