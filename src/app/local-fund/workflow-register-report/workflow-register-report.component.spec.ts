import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowRegisterReportComponent } from './workflow-register-report.component';

describe('WorkflowRegisterReportComponent', () => {
  let component: WorkflowRegisterReportComponent;
  let fixture: ComponentFixture<WorkflowRegisterReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowRegisterReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowRegisterReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
