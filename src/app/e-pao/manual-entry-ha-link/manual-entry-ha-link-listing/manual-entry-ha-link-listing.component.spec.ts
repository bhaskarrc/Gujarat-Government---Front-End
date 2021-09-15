import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualEntryHaLinkListingComponent } from './manual-entry-ha-link-listing.component';

describe('ManualEntryHaLinkListingComponent', () => {
  let component: ManualEntryHaLinkListingComponent;
  let fixture: ComponentFixture<ManualEntryHaLinkListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualEntryHaLinkListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualEntryHaLinkListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
