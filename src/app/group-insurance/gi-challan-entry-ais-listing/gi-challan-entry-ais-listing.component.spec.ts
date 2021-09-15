import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiChallanEntryAisListingComponent } from './gi-challan-entry-ais-listing.component';

describe('GiChallanEntryAisListingComponent', () => {
  let component: GiChallanEntryAisListingComponent;
  let fixture: ComponentFixture<GiChallanEntryAisListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiChallanEntryAisListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiChallanEntryAisListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
