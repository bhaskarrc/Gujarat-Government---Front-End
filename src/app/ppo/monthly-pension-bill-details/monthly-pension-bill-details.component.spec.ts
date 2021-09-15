import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyPensionBillDetailsComponent } from './monthly-pension-bill-details.component';

describe('MonthlyPensionBillDetailsComponent', () => {
  let component: MonthlyPensionBillDetailsComponent;
  let fixture: ComponentFixture<MonthlyPensionBillDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyPensionBillDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyPensionBillDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
