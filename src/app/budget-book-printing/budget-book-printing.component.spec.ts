import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetBookPrintingComponent } from './budget-book-printing.component';

describe('BudgetBookPrintingComponent', () => {
  let component: BudgetBookPrintingComponent;
  let fixture: ComponentFixture<BudgetBookPrintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetBookPrintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetBookPrintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
