import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowDetailsAuditorMappingComponent } from './workflow-details-auditor-mapping.component';

describe('WorkflowDetailsAuditorMappingComponent', () => {
  let component: WorkflowDetailsAuditorMappingComponent;
  let fixture: ComponentFixture<WorkflowDetailsAuditorMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowDetailsAuditorMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowDetailsAuditorMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
