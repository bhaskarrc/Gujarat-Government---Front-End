import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountClosingRequestListingToComponent } from './account-closing-request-listing-to.component';

describe('AccountClosingRequestListingToComponent', () => {
  let component: AccountClosingRequestListingToComponent;
  let fixture: ComponentFixture<AccountClosingRequestListingToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountClosingRequestListingToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountClosingRequestListingToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
