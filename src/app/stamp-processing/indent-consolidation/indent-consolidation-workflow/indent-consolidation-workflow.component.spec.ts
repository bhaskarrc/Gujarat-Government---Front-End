import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentConsolidationWorkflowComponent } from './indent-consolidation-workflow.component';

describe('IndentConsolidationWorkflowComponent', () => {
  let component: IndentConsolidationWorkflowComponent;
  let fixture: ComponentFixture<IndentConsolidationWorkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentConsolidationWorkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentConsolidationWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
