import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExBankScrollPaymentComponent } from './ex-bank-scroll-payment.component';

describe('ExBankScrollPaymentComponent', () => {
  let component: ExBankScrollPaymentComponent;
  let fixture: ComponentFixture<ExBankScrollPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExBankScrollPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExBankScrollPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
