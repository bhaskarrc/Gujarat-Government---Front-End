import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiSubscriptionRequestLetterListingComponent } from './gi-subscription-request-letter-listing.component';

describe('GiSubscriptionRequestLetterListingComponent', () => {
  let component: GiSubscriptionRequestLetterListingComponent;
  let fixture: ComponentFixture<GiSubscriptionRequestLetterListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiSubscriptionRequestLetterListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiSubscriptionRequestLetterListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
