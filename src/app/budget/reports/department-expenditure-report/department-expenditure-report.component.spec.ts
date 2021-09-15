import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentExpenditureReportComponent } from './department-expenditure-report.component';

describe('DepartmentExpenditureReportComponent', () => {
  let component: DepartmentExpenditureReportComponent;
  let fixture: ComponentFixture<DepartmentExpenditureReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentExpenditureReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentExpenditureReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
