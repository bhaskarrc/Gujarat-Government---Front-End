import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyPensionBillComponent } from './monthly-pension-bill.component';

describe('MonthlyPensionBillComponent', () => {
  let component: MonthlyPensionBillComponent;
  let fixture: ComponentFixture<MonthlyPensionBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyPensionBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyPensionBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
