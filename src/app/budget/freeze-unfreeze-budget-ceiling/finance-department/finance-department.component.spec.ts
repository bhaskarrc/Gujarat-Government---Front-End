import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceDepartmentComponent } from './finance-department.component';

describe('FreezeUnfreezeBudgetCeilingComponent', () => {
  let component: FinanceDepartmentComponent;
  let fixture: ComponentFixture<FinanceDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
