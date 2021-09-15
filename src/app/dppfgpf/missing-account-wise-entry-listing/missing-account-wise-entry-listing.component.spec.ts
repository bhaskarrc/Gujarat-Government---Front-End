import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingAccountWiseEntryListingComponent } from './missing-account-wise-entry-listing.component';

describe('MissingAccountWiseEntryListingComponent', () => {
  let component: MissingAccountWiseEntryListingComponent;
  let fixture: ComponentFixture<MissingAccountWiseEntryListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingAccountWiseEntryListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingAccountWiseEntryListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
