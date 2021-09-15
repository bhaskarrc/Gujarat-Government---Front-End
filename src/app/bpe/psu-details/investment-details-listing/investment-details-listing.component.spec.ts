import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentDetailsListingComponent } from './investment-details-listing.component';

describe('InvestmentDetailsListingComponent', () => {
  let component: InvestmentDetailsListingComponent;
  let fixture: ComponentFixture<InvestmentDetailsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentDetailsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentDetailsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
