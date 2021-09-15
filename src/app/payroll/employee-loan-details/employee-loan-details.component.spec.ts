import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLoanDetailsComponent } from './employee-loan-details.component';

describe('EmployeeLoanDetailsComponent', () => {
  let component: EmployeeLoanDetailsComponent;
  let fixture: ComponentFixture<EmployeeLoanDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeLoanDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeLoanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
