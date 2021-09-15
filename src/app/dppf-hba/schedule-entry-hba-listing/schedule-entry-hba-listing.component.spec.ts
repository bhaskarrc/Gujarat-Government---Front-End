import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleEntryHbaListingComponent } from './schedule-entry-hba-listing.component';

describe('ScheduleEntryHbaListingComponent', () => {
  let component: ScheduleEntryHbaListingComponent;
  let fixture: ComponentFixture<ScheduleEntryHbaListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleEntryHbaListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleEntryHbaListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
