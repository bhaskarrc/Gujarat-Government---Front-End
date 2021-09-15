import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardDetailsListingComponent } from './outward-details-listing.component';

describe('OutwardDetailsListingComponent', () => {
  let component: OutwardDetailsListingComponent;
  let fixture: ComponentFixture<OutwardDetailsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardDetailsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardDetailsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
