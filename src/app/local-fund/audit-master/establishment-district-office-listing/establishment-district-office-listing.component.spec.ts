import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentDistrictOfficeListingComponent } from './establishment-district-office-listing.component';

describe('EstablishmentDistrictOfficeListingComponent', () => {
  let component: EstablishmentDistrictOfficeListingComponent;
  let fixture: ComponentFixture<EstablishmentDistrictOfficeListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstablishmentDistrictOfficeListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentDistrictOfficeListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
