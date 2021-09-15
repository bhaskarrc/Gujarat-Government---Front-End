import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiEmployeeMasterListingComponent } from './gi-employee-master-listing.component';

describe('GiEmployeeMasterListingComponent', () => {
  let component: GiEmployeeMasterListingComponent;
  let fixture: ComponentFixture<GiEmployeeMasterListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiEmployeeMasterListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiEmployeeMasterListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
