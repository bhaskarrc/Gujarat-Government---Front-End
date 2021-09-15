import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundRequestListingComponent } from './refund-request-listing.component';

describe('RefundRequestListingComponent', () => {
  let component: RefundRequestListingComponent;
  let fixture: ComponentFixture<RefundRequestListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundRequestListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundRequestListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
