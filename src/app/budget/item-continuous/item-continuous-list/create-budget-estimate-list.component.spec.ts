import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBudgetEstimateListComponent } from './create-budget-estimate-list.component';

describe('CreateBudgetEstimateListComponent', () => {
  let component: CreateBudgetEstimateListComponent;
  let fixture: ComponentFixture<CreateBudgetEstimateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBudgetEstimateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBudgetEstimateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
