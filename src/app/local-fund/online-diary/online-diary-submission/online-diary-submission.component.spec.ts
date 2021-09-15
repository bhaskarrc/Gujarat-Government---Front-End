import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineDairySubmissionComponent } from './online-dairy-submission.component';

describe('OnlineDairySubmissionComponent', () => {
  let component: OnlineDairySubmissionComponent;
  let fixture: ComponentFixture<OnlineDairySubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineDairySubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineDairySubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
