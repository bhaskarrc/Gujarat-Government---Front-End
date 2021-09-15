import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDiscountMasterViewComponent } from './vendor-discount-master-view.component';

describe('VendorDiscountMasterViewComponent', () => {
  let component: VendorDiscountMasterViewComponent;
  let fixture: ComponentFixture<VendorDiscountMasterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorDiscountMasterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorDiscountMasterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
