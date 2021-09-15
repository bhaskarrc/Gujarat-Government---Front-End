import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDiscountMasterStoViewComponent } from './vendor-discount-master-sto-view.component';

describe('VendorDiscountMasterStoViewComponent', () => {
  let component: VendorDiscountMasterStoViewComponent;
  let fixture: ComponentFixture<VendorDiscountMasterStoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorDiscountMasterStoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorDiscountMasterStoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
