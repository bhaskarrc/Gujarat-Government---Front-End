import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowDetailsGrantComponent } from './workflow-details-grant.component';

describe('WorkflowDetailsGrantComponent', () => {
  let component: WorkflowDetailsGrantComponent;
  let fixture: ComponentFixture<WorkflowDetailsGrantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowDetailsGrantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowDetailsGrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
