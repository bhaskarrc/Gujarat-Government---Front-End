import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowDetailsEaComponent } from './workflow-details-ea.component';

describe('WorkflowDetailsEaComponent', () => {
  let component: WorkflowDetailsEaComponent;
  let fixture: ComponentFixture<WorkflowDetailsEaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowDetailsEaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowDetailsEaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
