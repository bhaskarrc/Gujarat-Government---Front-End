import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBudgetEstimateComponent } from './create-budget-estimate.component';

describe('CreateBudgetEstimateComponent', () => {
  let component: CreateBudgetEstimateComponent;
  let fixture: ComponentFixture<CreateBudgetEstimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBudgetEstimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBudgetEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
