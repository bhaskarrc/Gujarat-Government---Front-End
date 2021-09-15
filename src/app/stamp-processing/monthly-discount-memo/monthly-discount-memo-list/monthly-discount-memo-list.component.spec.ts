import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyDiscountMemoListComponent } from './monthly-discount-memo-list.component';

describe('MonthlyDiscountMemoListComponent', () => {
  let component: MonthlyDiscountMemoListComponent;
  let fixture: ComponentFixture<MonthlyDiscountMemoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyDiscountMemoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyDiscountMemoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
