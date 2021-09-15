import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeStaffWorkAllocationDetailsComponent } from './office-staff-work-allocation-details.component';

describe('OfficeStaffWorkAllocationDetailsComponent', () => {
  let component: OfficeStaffWorkAllocationDetailsComponent;
  let fixture: ComponentFixture<OfficeStaffWorkAllocationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeStaffWorkAllocationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeStaffWorkAllocationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
