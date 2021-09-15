import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiEmployeeScheduleListingComponent } from './gi-employee-schedule-listing.component';

describe('GiEmployeeScheduleListingComponent', () => {
  let component: GiEmployeeScheduleListingComponent;
  let fixture: ComponentFixture<GiEmployeeScheduleListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiEmployeeScheduleListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiEmployeeScheduleListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
