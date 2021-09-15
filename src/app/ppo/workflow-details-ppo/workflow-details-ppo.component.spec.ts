import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowDetailsPpoComponent } from './workflow-details-ppo.component';

describe('WorkflowDetailsPpoComponent', () => {
  let component: WorkflowDetailsPpoComponent;
  let fixture: ComponentFixture<WorkflowDetailsPpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowDetailsPpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowDetailsPpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
