import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsVoucherEntryListingComponent } from './nps-voucher-entry-listing.component';

describe('NpsVoucherEntryListingComponent', () => {
  let component: NpsVoucherEntryListingComponent;
  let fixture: ComponentFixture<NpsVoucherEntryListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsVoucherEntryListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsVoucherEntryListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
