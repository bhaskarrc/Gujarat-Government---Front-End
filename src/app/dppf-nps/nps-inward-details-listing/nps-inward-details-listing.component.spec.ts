import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsInwardDetailsListingComponent } from './nps-inward-details-listing.component';

describe('NpsInwardDetailsListingComponent', () => {
  let component: NpsInwardDetailsListingComponent;
  let fixture: ComponentFixture<NpsInwardDetailsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsInwardDetailsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsInwardDetailsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
