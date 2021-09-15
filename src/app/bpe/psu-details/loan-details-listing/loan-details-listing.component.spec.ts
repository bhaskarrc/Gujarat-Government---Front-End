import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDetailsListingComponent } from './loan-details-listing.component';

describe('LoanDetailsListingComponent', () => {
  let component: LoanDetailsListingComponent;
  let fixture: ComponentFixture<LoanDetailsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanDetailsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDetailsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
