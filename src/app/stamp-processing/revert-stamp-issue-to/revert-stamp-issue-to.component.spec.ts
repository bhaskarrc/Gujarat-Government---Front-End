import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevertStampIssueToComponent } from './revert-stamp-issue-to.component';

describe('RevertStampIssueToComponent', () => {
  let component: RevertStampIssueToComponent;
  let fixture: ComponentFixture<RevertStampIssueToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevertStampIssueToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevertStampIssueToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
