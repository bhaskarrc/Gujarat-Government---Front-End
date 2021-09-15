import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowDepartmentComponent } from './workflow-department.component';

describe('WorkflowDepartmentComponent', () => {
  let component: WorkflowDepartmentComponent;
  let fixture: ComponentFixture<WorkflowDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
