import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowDetailsLetterOfCreditComponent } from './workflow-details-letter-of-credit.component';

describe('WorkflowDetailsLetterOfCreditComponent', () => {
  let component: WorkflowDetailsLetterOfCreditComponent;
  let fixture: ComponentFixture<WorkflowDetailsLetterOfCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowDetailsLetterOfCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowDetailsLetterOfCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
