import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmdRefundPostedVoucherComponent } from './emd-refund-posted-voucher.component';

describe('EmdRefundPostedVoucherComponent', () => {
  let component: EmdRefundPostedVoucherComponent;
  let fixture: ComponentFixture<EmdRefundPostedVoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmdRefundPostedVoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmdRefundPostedVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
