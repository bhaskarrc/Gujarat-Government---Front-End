import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountAgLevelApprovedListingComponent } from './create-account-ag-level-approved-listing.component';

describe('CreateAccountAgLevelApprovedListingComponent', () => {
  let component: CreateAccountAgLevelApprovedListingComponent;
  let fixture: ComponentFixture<CreateAccountAgLevelApprovedListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountAgLevelApprovedListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountAgLevelApprovedListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
