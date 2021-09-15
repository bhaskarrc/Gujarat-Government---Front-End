import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundRequestListingTreasuryComponent } from './refund-request-listing-treasury.component';

describe('RefundRequestListingTreasuryComponent', () => {
  let component: RefundRequestListingTreasuryComponent;
  let fixture: ComponentFixture<RefundRequestListingTreasuryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundRequestListingTreasuryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundRequestListingTreasuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
