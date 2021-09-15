import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampIssueToComponent } from './stamp-issue-to.component';

describe('StampIssueToComponent', () => {
  let component: StampIssueToComponent;
  let fixture: ComponentFixture<StampIssueToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampIssueToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampIssueToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
