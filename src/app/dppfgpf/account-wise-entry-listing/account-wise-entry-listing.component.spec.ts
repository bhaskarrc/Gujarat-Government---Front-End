import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountWiseEntryListingComponent } from './account-wise-entry-listing.component';

describe('AccountWiseEntryListingComponent', () => {
  let component: AccountWiseEntryListingComponent;
  let fixture: ComponentFixture<AccountWiseEntryListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountWiseEntryListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountWiseEntryListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
