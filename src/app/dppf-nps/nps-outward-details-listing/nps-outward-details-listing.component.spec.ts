import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsOutwardDetailsListingComponent } from './nps-outward-details-listing.component';

describe('NpsOutwardDetailsListingComponent', () => {
  let component: NpsOutwardDetailsListingComponent;
  let fixture: ComponentFixture<NpsOutwardDetailsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsOutwardDetailsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsOutwardDetailsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
