import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevertStampIssueToViewComponent } from './revert-stamp-issue-to-view.component';

describe('RevertStampIssueToViewComponent', () => {
  let component: RevertStampIssueToViewComponent;
  let fixture: ComponentFixture<RevertStampIssueToViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevertStampIssueToViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevertStampIssueToViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
