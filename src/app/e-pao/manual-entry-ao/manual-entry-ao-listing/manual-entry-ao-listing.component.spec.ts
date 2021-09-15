import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualEntryAoListingComponent } from './manual-entry-ao-listing.component';

describe('ManualEntryAoListingComponent', () => {
  let component: ManualEntryAoListingComponent;
  let fixture: ComponentFixture<ManualEntryAoListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualEntryAoListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualEntryAoListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
