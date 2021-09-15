import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiAisEmployeeScheduleListingComponent } from './gi-ais-employee-schedule-listing.component';

describe('GiAisEmployeeScheduleListingComponent', () => {
  let component: GiAisEmployeeScheduleListingComponent;
  let fixture: ComponentFixture<GiAisEmployeeScheduleListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiAisEmployeeScheduleListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiAisEmployeeScheduleListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
