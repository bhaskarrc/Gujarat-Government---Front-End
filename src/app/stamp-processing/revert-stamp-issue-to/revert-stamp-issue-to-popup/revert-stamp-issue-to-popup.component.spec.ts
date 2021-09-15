import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevertStampIssueToPopupComponent } from './revert-stamp-issue-to-popup.component';

describe('RevertStampIssueToPopupComponent', () => {
  let component: RevertStampIssueToPopupComponent;
  let fixture: ComponentFixture<RevertStampIssueToPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevertStampIssueToPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevertStampIssueToPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
