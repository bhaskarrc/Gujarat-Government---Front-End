import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcomeSubmissionDetailsComponent } from './outcome-submission-details.component';

describe('OutcomeSubmissionDetailsComponent', () => {
  let component: OutcomeSubmissionDetailsComponent;
  let fixture: ComponentFixture<OutcomeSubmissionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutcomeSubmissionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutcomeSubmissionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
