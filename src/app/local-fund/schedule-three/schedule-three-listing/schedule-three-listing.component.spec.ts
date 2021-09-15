import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleThreeListingComponent } from './schedule-three-listing.component';

describe('ScheduleThreeListingComponent', () => {
  let component: ScheduleThreeListingComponent;
  let fixture: ComponentFixture<ScheduleThreeListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleThreeListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleThreeListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
