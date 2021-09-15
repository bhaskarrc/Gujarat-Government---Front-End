import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDiscountMasterComponent } from './vendor-discount-master.component';

describe('VendorDiscountMasterComponent', () => {
  let component: VendorDiscountMasterComponent;
  let fixture: ComponentFixture<VendorDiscountMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorDiscountMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorDiscountMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
