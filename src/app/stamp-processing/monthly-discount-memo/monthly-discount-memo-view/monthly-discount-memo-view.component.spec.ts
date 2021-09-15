import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyDiscountMemoViewComponent } from './monthly-discount-memo-view.component';

describe('MonthlyDiscountMemoViewComponent', () => {
  let component: MonthlyDiscountMemoViewComponent;
  let fixture: ComponentFixture<MonthlyDiscountMemoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyDiscountMemoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyDiscountMemoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
