import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampIssueToViewComponent } from './stamp-issue-to-view.component';

describe('StampIssueToViewComponent', () => {
  let component: StampIssueToViewComponent;
  let fixture: ComponentFixture<StampIssueToViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampIssueToViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampIssueToViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
