import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetHeadMappingComponent } from './budget-head-mapping.component';

describe('BudgetHeadMappingComponent', () => {
  let component: BudgetHeadMappingComponent;
  let fixture: ComponentFixture<BudgetHeadMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetHeadMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetHeadMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
