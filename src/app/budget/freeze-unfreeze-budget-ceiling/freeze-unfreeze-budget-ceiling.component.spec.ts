import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreezeUnfreezeBudgetCeilingComponent } from './freeze-unfreeze-budget-ceiling.component';

describe('FreezeUnfreezeBudgetCeilingComponent', () => {
  let component: FreezeUnfreezeBudgetCeilingComponent;
  let fixture: ComponentFixture<FreezeUnfreezeBudgetCeilingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreezeUnfreezeBudgetCeilingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreezeUnfreezeBudgetCeilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
