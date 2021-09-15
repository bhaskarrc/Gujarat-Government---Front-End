import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentForCorporationListingComponent } from './establishment-for-corporation-listing.component';

describe('EstablishmentForCorporationListingComponent', () => {
  let component: EstablishmentForCorporationListingComponent;
  let fixture: ComponentFixture<EstablishmentForCorporationListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstablishmentForCorporationListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentForCorporationListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
