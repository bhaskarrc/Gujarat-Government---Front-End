import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsMissingAccountWiseEntryListingComponent } from './nps-missing-account-wise-entry-listing.component';

describe('NpsMissingAccountWiseEntryListingComponent', () => {
  let component: NpsMissingAccountWiseEntryListingComponent;
  let fixture: ComponentFixture<NpsMissingAccountWiseEntryListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsMissingAccountWiseEntryListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsMissingAccountWiseEntryListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
