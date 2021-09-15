import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcomeBudgetIntroductionComponent } from './outcome-budget-introduction.component';

describe('OutcomeBudgetIntroductionComponent', () => {
  let component: OutcomeBudgetIntroductionComponent;
  let fixture: ComponentFixture<OutcomeBudgetIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutcomeBudgetIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutcomeBudgetIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
