import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopScheduleEntryListingComponent } from './top-schedule-entry-listing.component';

describe('TopScheduleEntryListingComponent', () => {
  let component: TopScheduleEntryListingComponent;
  let fixture: ComponentFixture<TopScheduleEntryListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopScheduleEntryListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopScheduleEntryListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
