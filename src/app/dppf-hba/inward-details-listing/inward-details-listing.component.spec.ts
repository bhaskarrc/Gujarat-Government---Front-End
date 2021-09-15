import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardDetailsListingComponent } from './inward-details-listing.component';

describe('InwardDetailsListingComponent', () => {
  let component: InwardDetailsListingComponent;
  let fixture: ComponentFixture<InwardDetailsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InwardDetailsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InwardDetailsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
