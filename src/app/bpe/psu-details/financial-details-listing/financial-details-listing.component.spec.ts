import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialDetailsListingComponent } from './financial-details-listing.component';

describe('FinancialDetailsListingComponent', () => {
  let component: FinancialDetailsListingComponent;
  let fixture: ComponentFixture<FinancialDetailsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialDetailsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialDetailsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
