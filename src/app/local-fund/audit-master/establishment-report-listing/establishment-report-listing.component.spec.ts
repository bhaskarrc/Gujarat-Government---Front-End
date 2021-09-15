import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentReportListingComponent } from './establishment-report-listing.component';

describe('EstablishmentReportListingComponent', () => {
  let component: EstablishmentReportListingComponent;
  let fixture: ComponentFixture<EstablishmentReportListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstablishmentReportListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentReportListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
