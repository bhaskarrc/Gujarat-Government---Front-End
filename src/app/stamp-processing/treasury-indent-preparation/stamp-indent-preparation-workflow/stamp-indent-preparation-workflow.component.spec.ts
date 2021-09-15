import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampIndentPreparationWorkflowComponent } from './stamp-indent-preparation-workflow.component';

describe('StampIndentPreparationWorkflowComponent', () => {
  let component: StampIndentPreparationWorkflowComponent;
  let fixture: ComponentFixture<StampIndentPreparationWorkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampIndentPreparationWorkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampIndentPreparationWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
