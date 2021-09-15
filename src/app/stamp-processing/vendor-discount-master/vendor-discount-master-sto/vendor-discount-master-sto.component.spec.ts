import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDiscountMasterStoComponent } from './vendor-discount-master-sto.component';

describe('VendorDiscountMasterStoComponent', () => {
  let component: VendorDiscountMasterStoComponent;
  let fixture: ComponentFixture<VendorDiscountMasterStoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorDiscountMasterStoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorDiscountMasterStoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
