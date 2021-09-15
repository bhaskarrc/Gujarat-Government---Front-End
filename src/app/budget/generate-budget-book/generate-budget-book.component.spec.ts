import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateBudgetBookComponent } from './generate-budget-book.component';

describe('GenerateBudgetBookComponent', () => {
  let component: GenerateBudgetBookComponent;
  let fixture: ComponentFixture<GenerateBudgetBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateBudgetBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateBudgetBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
