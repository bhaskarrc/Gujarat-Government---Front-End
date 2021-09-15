import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowDetailsCiComponent } from './workflow-details-ci.component';

describe('WorkflowDetailsCiComponent', () => {
  let component: WorkflowDetailsCiComponent;
  let fixture: ComponentFixture<WorkflowDetailsCiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowDetailsCiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowDetailsCiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
