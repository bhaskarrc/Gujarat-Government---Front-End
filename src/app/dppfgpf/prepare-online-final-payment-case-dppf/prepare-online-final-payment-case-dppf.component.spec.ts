import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareOnlineFinalPaymentCaseDppfComponent } from './prepare-online-final-payment-case-dppf.component';

describe('PrepareOnlineFinalPaymentCaseDppfComponent', () => {
  let component: PrepareOnlineFinalPaymentCaseDppfComponent;
  let fixture: ComponentFixture<PrepareOnlineFinalPaymentCaseDppfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepareOnlineFinalPaymentCaseDppfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepareOnlineFinalPaymentCaseDppfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
