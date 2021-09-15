import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualEntryHaListingComponent } from './manual-entry-ha-listing.component';

describe('ManualEntryHaListingComponent', () => {
  let component: ManualEntryHaListingComponent;
  let fixture: ComponentFixture<ManualEntryHaListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualEntryHaListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualEntryHaListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
