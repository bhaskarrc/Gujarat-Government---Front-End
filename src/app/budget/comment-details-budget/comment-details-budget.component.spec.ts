import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentDetailsBudgetComponent } from './comment-details-budget.component';

describe('CommentDetailsBudgetComponent', () => {
  let component: CommentDetailsBudgetComponent;
  let fixture: ComponentFixture<CommentDetailsBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentDetailsBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentDetailsBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
