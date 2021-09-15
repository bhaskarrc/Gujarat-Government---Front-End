import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTransferHbaListingComponent } from './account-transfer-hba-listing.component';

describe('AccountTransferHbaListingComponent', () => {
  let component: AccountTransferHbaListingComponent;
  let fixture: ComponentFixture<AccountTransferHbaListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountTransferHbaListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTransferHbaListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
