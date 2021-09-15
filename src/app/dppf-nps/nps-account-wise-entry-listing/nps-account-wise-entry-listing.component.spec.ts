import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsAccountWiseEntryListingComponent } from './nps-account-wise-entry-listing.component';

describe('NpsAccountWiseEntryListingComponent', () => {
  let component: NpsAccountWiseEntryListingComponent;
  let fixture: ComponentFixture<NpsAccountWiseEntryListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsAccountWiseEntryListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsAccountWiseEntryListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
