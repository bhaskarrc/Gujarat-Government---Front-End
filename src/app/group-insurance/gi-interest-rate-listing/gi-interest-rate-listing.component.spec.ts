import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiInterestRateListingComponent } from './gi-interest-rate-listing.component';

describe('GiInterestRateListingComponent', () => {
  let component: GiInterestRateListingComponent;
  let fixture: ComponentFixture<GiInterestRateListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiInterestRateListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiInterestRateListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
