import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundAndStampCommissionVoucherDetailPostingComponent } from './refund-and-stamp-commission-voucher-detail-posting.component';

describe('RefundAndStampCommissionVoucherDetailPostingComponent', () => {
  let component: RefundAndStampCommissionVoucherDetailPostingComponent;
  let fixture: ComponentFixture<RefundAndStampCommissionVoucherDetailPostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundAndStampCommissionVoucherDetailPostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundAndStampCommissionVoucherDetailPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
