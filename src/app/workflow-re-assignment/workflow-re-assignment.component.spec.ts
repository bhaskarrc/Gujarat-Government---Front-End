import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowReAssignmentComponent } from './workflow-re-assignment.component';

describe('WorkflowReAssignmentComponent', () => {
  let component: WorkflowReAssignmentComponent;
  let fixture: ComponentFixture<WorkflowReAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowReAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowReAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
