import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDiscountMasterStoListComponent } from './vendor-discount-master-sto-list.component';

describe('VendorDiscountMasterStoListComponent', () => {
  let component: VendorDiscountMasterStoListComponent;
  let fixture: ComponentFixture<VendorDiscountMasterStoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorDiscountMasterStoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorDiscountMasterStoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
