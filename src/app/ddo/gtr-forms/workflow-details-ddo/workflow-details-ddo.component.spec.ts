import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowDetailsDdoComponent } from './workflow-details-ddo.component';

describe('WorkflowDetailsDdoComponent', () => {
  let component: WorkflowDetailsDdoComponent;
  let fixture: ComponentFixture<WorkflowDetailsDdoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowDetailsDdoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowDetailsDdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
