import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeQuarterAllocationComponent } from './employee-quarter-allocation.component';

describe('EmployeeQuarterAllocationComponent', () => {
  let component: EmployeeQuarterAllocationComponent;
  let fixture: ComponentFixture<EmployeeQuarterAllocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeQuarterAllocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeQuarterAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
