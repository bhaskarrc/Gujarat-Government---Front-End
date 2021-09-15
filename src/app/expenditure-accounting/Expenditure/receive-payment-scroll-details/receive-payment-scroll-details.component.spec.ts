import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivePaymentScrollDetailsComponent } from './receive-payment-scroll-details.component';

describe('ReceivePaymentScrollDetailsComponent', () => {
  let component: ReceivePaymentScrollDetailsComponent;
  let fixture: ComponentFixture<ReceivePaymentScrollDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivePaymentScrollDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivePaymentScrollDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
