import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherEntryFormListingComponent } from './voucher-entry-form-listing.component';

describe('VoucherEntryFormListingComponent', () => {
  let component: VoucherEntryFormListingComponent;
  let fixture: ComponentFixture<VoucherEntryFormListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherEntryFormListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherEntryFormListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
