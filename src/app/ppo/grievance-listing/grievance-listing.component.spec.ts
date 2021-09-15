import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrievanceListingComponent } from './grievance-listing.component';

describe('GrievanceListingComponent', () => {
  let component: GrievanceListingComponent;
  let fixture: ComponentFixture<GrievanceListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrievanceListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrievanceListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
