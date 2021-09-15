import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmdRefundVoucherDetailPostingComponent } from './emd-refund-voucher-detail-posting.component';

describe('EmdRefundVoucherDetailPostingComponent', () => {
  let component: EmdRefundVoucherDetailPostingComponent;
  let fixture: ComponentFixture<EmdRefundVoucherDetailPostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmdRefundVoucherDetailPostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmdRefundVoucherDetailPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
