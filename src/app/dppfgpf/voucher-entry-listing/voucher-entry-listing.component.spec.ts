import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherEntryListingComponent } from './voucher-entry-listing.component';

describe('VoucherEntryListingComponent', () => {
  let component: VoucherEntryListingComponent;
  let fixture: ComponentFixture<VoucherEntryListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherEntryListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherEntryListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
