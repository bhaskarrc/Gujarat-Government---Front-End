import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareOnlineFinalPaymentCaseListingComponent } from './prepare-online-final-payment-case-listing.component';

describe('PrepareOnlineFinalPaymentCaseListingComponent', () => {
  let component: PrepareOnlineFinalPaymentCaseListingComponent;
  let fixture: ComponentFixture<PrepareOnlineFinalPaymentCaseListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepareOnlineFinalPaymentCaseListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepareOnlineFinalPaymentCaseListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
