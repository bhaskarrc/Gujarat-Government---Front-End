import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareOnlineFinalPaymentCaseComponent } from './prepare-online-final-payment-case.component';

describe('PrepareOnlineFinalPaymentCaseComponent', () => {
  let component: PrepareOnlineFinalPaymentCaseComponent;
  let fixture: ComponentFixture<PrepareOnlineFinalPaymentCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepareOnlineFinalPaymentCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepareOnlineFinalPaymentCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
