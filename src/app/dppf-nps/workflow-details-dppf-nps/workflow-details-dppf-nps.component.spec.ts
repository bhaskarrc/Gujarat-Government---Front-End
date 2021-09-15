import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowDetailsDppfNpsComponent } from './workflow-details-dppf-nps.component';

describe('WorkflowDetailsDppfNpsComponent', () => {
  let component: WorkflowDetailsDppfNpsComponent;
  let fixture: ComponentFixture<WorkflowDetailsDppfNpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowDetailsDppfNpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowDetailsDppfNpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
