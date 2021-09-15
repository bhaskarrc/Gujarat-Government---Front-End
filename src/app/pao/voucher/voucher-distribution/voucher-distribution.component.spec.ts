import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherDistributionComponent } from './voucher-distribution.component';

describe('VoucherDistributionComponent', () => {
  let component: VoucherDistributionComponent;
  let fixture: ComponentFixture<VoucherDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
