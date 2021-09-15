import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallanPaymentFromGovComponent } from './challan-payment-from-gov.component';

describe('ChallanPaymentFromGovComponent', () => {
  let component: ChallanPaymentFromGovComponent;
  let fixture: ComponentFixture<ChallanPaymentFromGovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallanPaymentFromGovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallanPaymentFromGovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
