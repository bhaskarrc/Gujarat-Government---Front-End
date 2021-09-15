import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmdRefundPostedVoucherViewComponent } from './emd-refund-posted-voucher-view.component';

describe('EmdRefundPostedVoucherViewComponent', () => {
  let component: EmdRefundPostedVoucherViewComponent;
  let fixture: ComponentFixture<EmdRefundPostedVoucherViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmdRefundPostedVoucherViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmdRefundPostedVoucherViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
