import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsTopScheduleEntryListingComponent } from './nps-top-schedule-entry-listing.component';

describe('NpsTopScheduleEntryListingComponent', () => {
  let component: NpsTopScheduleEntryListingComponent;
  let fixture: ComponentFixture<NpsTopScheduleEntryListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsTopScheduleEntryListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsTopScheduleEntryListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
