import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountWiseHbaListingComponent } from './account-wise-hba-listing.component';

describe('AccountWiseHbaListingComponent', () => {
  let component: AccountWiseHbaListingComponent;
  let fixture: ComponentFixture<AccountWiseHbaListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountWiseHbaListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountWiseHbaListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
