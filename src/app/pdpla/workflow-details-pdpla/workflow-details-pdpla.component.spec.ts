import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowDetailsPdplaComponent } from './workflow-details-pdpla.component';

describe('WorkflowDetailsPdplaComponent', () => {
  let component: WorkflowDetailsPdplaComponent;
  let fixture: ComponentFixture<WorkflowDetailsPdplaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowDetailsPdplaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowDetailsPdplaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
