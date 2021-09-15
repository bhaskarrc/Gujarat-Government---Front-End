import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetBookPrintComponent } from './budget-book-print.component';

describe('BudgetBookPrintComponent', () => {
  let component: BudgetBookPrintComponent;
  let fixture: ComponentFixture<BudgetBookPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetBookPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetBookPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
