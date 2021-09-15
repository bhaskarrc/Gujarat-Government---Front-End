import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualEmployeeSalaryProcessingComponent } from './individual-employee-salary-processing.component';

describe('IndividualEmployeeSalaryProcessingComponent', () => {
  let component: IndividualEmployeeSalaryProcessingComponent;
  let fixture: ComponentFixture<IndividualEmployeeSalaryProcessingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualEmployeeSalaryProcessingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualEmployeeSalaryProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
