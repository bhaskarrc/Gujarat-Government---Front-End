import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentReceiptJottingComponent } from './payment-receipt-jotting.component';

describe('PaymentReceiptJottingComponent', () => {
  let component: PaymentReceiptJottingComponent;
  let fixture: ComponentFixture<PaymentReceiptJottingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentReceiptJottingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentReceiptJottingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
