import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountClosingRequestListingComponent } from './account-closing-request-listing.component';

describe('AccountClosingRequestListingComponent', () => {
  let component: AccountClosingRequestListingComponent;
  let fixture: ComponentFixture<AccountClosingRequestListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountClosingRequestListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountClosingRequestListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
