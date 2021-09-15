import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExPaymentReceiptJottingComponent } from './ex-payment-receipt-jotting.component';

describe('ExPaymentReceiptJottingComponent', () => {
  let component: ExPaymentReceiptJottingComponent;
  let fixture: ComponentFixture<ExPaymentReceiptJottingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExPaymentReceiptJottingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExPaymentReceiptJottingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
