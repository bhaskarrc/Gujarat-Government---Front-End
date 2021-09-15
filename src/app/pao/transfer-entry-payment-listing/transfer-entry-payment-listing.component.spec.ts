import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferEntryPaymentListingComponent } from './transfer-entry-payment-listing.component';

describe('TransferEntryPaymentListingComponent', () => {
  let component: TransferEntryPaymentListingComponent;
  let fixture: ComponentFixture<TransferEntryPaymentListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferEntryPaymentListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferEntryPaymentListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
