import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardDetailsListingHbaComponent } from './outward-details-listing-hba.component';

describe('OutwardDetailsListingHbaComponent', () => {
  let component: OutwardDetailsListingHbaComponent;
  let fixture: ComponentFixture<OutwardDetailsListingHbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardDetailsListingHbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardDetailsListingHbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
