import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyDiscountMemoComponent } from './monthly-discount-memo.component';

describe('MonthlyDiscountMemoComponent', () => {
  let component: MonthlyDiscountMemoComponent;
  let fixture: ComponentFixture<MonthlyDiscountMemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyDiscountMemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyDiscountMemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
