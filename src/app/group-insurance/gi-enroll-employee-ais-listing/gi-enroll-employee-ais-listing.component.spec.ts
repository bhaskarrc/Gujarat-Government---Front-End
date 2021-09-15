import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiEnrollEmployeeAisListingComponent } from './gi-enroll-employee-ais-listing.component';

describe('GiEnrollEmployeeAisListingComponent', () => {
  let component: GiEnrollEmployeeAisListingComponent;
  let fixture: ComponentFixture<GiEnrollEmployeeAisListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiEnrollEmployeeAisListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiEnrollEmployeeAisListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
