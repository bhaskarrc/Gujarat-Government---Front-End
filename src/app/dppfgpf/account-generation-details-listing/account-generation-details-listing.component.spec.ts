import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountGenerationDetailsListingComponent } from './account-generation-details-listing.component';

describe('AccountGenerationDetailsListingComponent', () => {
  let component: AccountGenerationDetailsListingComponent;
  let fixture: ComponentFixture<AccountGenerationDetailsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountGenerationDetailsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountGenerationDetailsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
