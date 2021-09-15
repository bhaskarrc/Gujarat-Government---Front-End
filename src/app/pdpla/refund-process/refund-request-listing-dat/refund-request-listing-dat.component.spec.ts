import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundRequestListingDatComponent } from './refund-request-listing-dat.component';

describe('RefundRequestListingDatComponent', () => {
  let component: RefundRequestListingDatComponent;
  let fixture: ComponentFixture<RefundRequestListingDatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundRequestListingDatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundRequestListingDatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
