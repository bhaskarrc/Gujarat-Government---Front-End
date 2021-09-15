import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowDppfHbaComponent } from './workflow-dppf-hba.component';

describe('WorkflowDppfHbaComponent', () => {
  let component: WorkflowDppfHbaComponent;
  let fixture: ComponentFixture<WorkflowDppfHbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowDppfHbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowDppfHbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
