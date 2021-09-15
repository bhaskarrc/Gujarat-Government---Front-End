import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBudgetEstimateViewComponent } from './create-budget-estimate-view.component';

describe('CreateBudgetEstimateViewComponent', () => {
  let component: CreateBudgetEstimateViewComponent;
  let fixture: ComponentFixture<CreateBudgetEstimateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBudgetEstimateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBudgetEstimateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
