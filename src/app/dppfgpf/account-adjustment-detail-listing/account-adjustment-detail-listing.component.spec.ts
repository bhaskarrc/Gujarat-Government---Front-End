import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountAdjustmentDetailListingComponent } from './account-adjustment-detail-listing.component';

describe('AccountAdjustmentDetailListingComponent', () => {
  let component: AccountAdjustmentDetailListingComponent;
  let fixture: ComponentFixture<AccountAdjustmentDetailListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountAdjustmentDetailListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountAdjustmentDetailListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
