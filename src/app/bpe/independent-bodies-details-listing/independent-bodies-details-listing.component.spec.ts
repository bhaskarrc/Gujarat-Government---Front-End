import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndependentBodiesDetailsListingComponent } from './independent-bodies-details-listing.component';

describe('IndependentBodiesDetailsListingComponent', () => {
  let component: IndependentBodiesDetailsListingComponent;
  let fixture: ComponentFixture<IndependentBodiesDetailsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndependentBodiesDetailsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndependentBodiesDetailsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
