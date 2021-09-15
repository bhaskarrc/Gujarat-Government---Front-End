import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetHeadMappingTwoComponent } from './budget-head-mapping-two.component';

describe('BudgetHeadMappingTwoComponent', () => {
  let component: BudgetHeadMappingTwoComponent;
  let fixture: ComponentFixture<BudgetHeadMappingTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetHeadMappingTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetHeadMappingTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
