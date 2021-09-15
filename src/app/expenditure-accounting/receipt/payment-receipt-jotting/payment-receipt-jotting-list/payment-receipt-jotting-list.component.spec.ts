import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentReceiptJottingListComponent } from './payment-receipt-jotting-list.component';

describe('PaymentReceiptJottingListComponent', () => {
  let component: PaymentReceiptJottingListComponent;
  let fixture: ComponentFixture<PaymentReceiptJottingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentReceiptJottingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentReceiptJottingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
