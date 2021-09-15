import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampIssueToListComponent } from './stamp-issue-to-list.component';

describe('StampIssueToListComponent', () => {
  let component: StampIssueToListComponent;
  let fixture: ComponentFixture<StampIssueToListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampIssueToListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampIssueToListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
