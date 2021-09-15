import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleOfHbaInterestDeductionComponent } from './schedule-of-hba-interest-deduction.component';

describe('ScheduleOfHbaInterestDeductionComponent', () => {
  let component: ScheduleOfHbaInterestDeductionComponent;
  let fixture: ComponentFixture<ScheduleOfHbaInterestDeductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleOfHbaInterestDeductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleOfHbaInterestDeductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
