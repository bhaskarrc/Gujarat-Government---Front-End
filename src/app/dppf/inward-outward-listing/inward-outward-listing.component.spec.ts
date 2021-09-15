import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardOutwardListingComponent } from './inward-outward-listing.component';

describe('InwardOutwardListingComponent', () => {
  let component: InwardOutwardListingComponent;
  let fixture: ComponentFixture<InwardOutwardListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InwardOutwardListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InwardOutwardListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
