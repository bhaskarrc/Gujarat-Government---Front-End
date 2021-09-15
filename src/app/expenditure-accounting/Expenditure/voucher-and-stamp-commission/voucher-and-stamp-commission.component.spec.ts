import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherAndStampCommissionComponent } from './voucher-and-stamp-commission.component';

describe('VoucherAndStampCommissionComponent', () => {
  let component: VoucherAndStampCommissionComponent;
  let fixture: ComponentFixture<VoucherAndStampCommissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherAndStampCommissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherAndStampCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
