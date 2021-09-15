import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailsListingComponent } from './account-details-listing.component';

describe('AccountDetailsListingComponent', () => {
  let component: AccountDetailsListingComponent;
  let fixture: ComponentFixture<AccountDetailsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountDetailsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
