import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionPaymentSlipComponent } from './pension-payment-slip.component';

describe('PensionPaymentSlipComponent', () => {
  let component: PensionPaymentSlipComponent;
  let fixture: ComponentFixture<PensionPaymentSlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PensionPaymentSlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionPaymentSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
