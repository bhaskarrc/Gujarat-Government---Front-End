import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDiscountMasterListComponent } from './vendor-discount-master-list.component';

describe('VendorDiscountMasterListComponent', () => {
  let component: VendorDiscountMasterListComponent;
  let fixture: ComponentFixture<VendorDiscountMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorDiscountMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorDiscountMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
