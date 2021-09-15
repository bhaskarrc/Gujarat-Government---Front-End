import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeStaffWorkAllocationDetailsReportComponent } from './office-staff-work-allocation-details-report.component';

describe('OfficeStaffWorkAllocationDetailsReportComponent', () => {
  let component: OfficeStaffWorkAllocationDetailsReportComponent;
  let fixture: ComponentFixture<OfficeStaffWorkAllocationDetailsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeStaffWorkAllocationDetailsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeStaffWorkAllocationDetailsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
