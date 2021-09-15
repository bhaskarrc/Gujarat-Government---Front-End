import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualEntryAoLinkListingComponent } from './manual-entry-ao-link-listing.component';

describe('ManualEntryAoLinkListingComponent', () => {
  let component: ManualEntryAoLinkListingComponent;
  let fixture: ComponentFixture<ManualEntryAoLinkListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualEntryAoLinkListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualEntryAoLinkListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
