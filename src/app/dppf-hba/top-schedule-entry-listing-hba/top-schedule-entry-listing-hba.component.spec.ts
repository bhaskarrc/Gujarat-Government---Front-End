import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopScheduleEntryListingHbaComponent } from './top-schedule-entry-listing-hba.component';

describe('TopScheduleEntryListingHbaComponent', () => {
  let component: TopScheduleEntryListingHbaComponent;
  let fixture: ComponentFixture<TopScheduleEntryListingHbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopScheduleEntryListingHbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopScheduleEntryListingHbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
