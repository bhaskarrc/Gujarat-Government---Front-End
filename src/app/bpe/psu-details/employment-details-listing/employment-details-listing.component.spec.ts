import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentDetailsListingComponent } from './employment-details-listing.component';

describe('EmploymentDetailsListingComponent', () => {
  let component: EmploymentDetailsListingComponent;
  let fixture: ComponentFixture<EmploymentDetailsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploymentDetailsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentDetailsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
