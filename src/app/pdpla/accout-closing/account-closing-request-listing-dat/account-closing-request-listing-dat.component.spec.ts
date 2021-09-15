import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountClosingRequestListingDatComponent } from './account-closing-request-listing-dat.component';

describe('AccountClosingRequestListingDatComponent', () => {
  let component: AccountClosingRequestListingDatComponent;
  let fixture: ComponentFixture<AccountClosingRequestListingDatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountClosingRequestListingDatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountClosingRequestListingDatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
