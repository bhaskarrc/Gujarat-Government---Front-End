import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowDetailsDppfComponent } from './workflow-details-dppf.component';

describe('WorkflowDetailsDppfComponent', () => {
  let component: WorkflowDetailsDppfComponent;
  let fixture: ComponentFixture<WorkflowDetailsDppfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowDetailsDppfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowDetailsDppfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
