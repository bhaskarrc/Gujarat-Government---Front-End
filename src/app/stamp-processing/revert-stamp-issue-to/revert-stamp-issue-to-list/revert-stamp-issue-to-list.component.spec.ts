import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevertStampIssueToListComponent } from './revert-stamp-issue-to-list.component';

describe('RevertStampIssueToListComponent', () => {
  let component: RevertStampIssueToListComponent;
  let fixture: ComponentFixture<RevertStampIssueToListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevertStampIssueToListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevertStampIssueToListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
