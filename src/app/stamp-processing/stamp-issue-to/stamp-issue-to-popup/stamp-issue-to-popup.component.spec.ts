import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampIssueToPopupComponent } from './stamp-issue-to-popup.component';

describe('StampIssueToPopupComponent', () => {
  let component: StampIssueToPopupComponent;
  let fixture: ComponentFixture<StampIssueToPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampIssueToPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampIssueToPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
