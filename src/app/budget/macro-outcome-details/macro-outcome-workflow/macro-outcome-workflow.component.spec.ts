import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroOutcomeWorkflowComponent } from './macro-outcome-workflow.component';

describe('MacroOutcomeWorkflowComponent', () => {
  let component: MacroOutcomeWorkflowComponent;
  let fixture: ComponentFixture<MacroOutcomeWorkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacroOutcomeWorkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacroOutcomeWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
