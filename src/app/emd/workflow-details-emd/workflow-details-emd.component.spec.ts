import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowDetailsGrantComponent } from './workflow-details-emd.component';

describe('WorkflowDetailsEmdComponent', () => {
  let component: WorkflowDetailsGrantComponent;
  let fixture: ComponentFixture<WorkflowDetailsGrantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorkflowDetailsEmdComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowDetailsEmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
