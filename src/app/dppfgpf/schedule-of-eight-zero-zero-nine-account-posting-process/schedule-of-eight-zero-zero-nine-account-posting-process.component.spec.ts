import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleOfEightZeroZeroNineAccountPostingProcessComponent } from './schedule-of-eight-zero-zero-nine-account-posting-process.component';

describe('ScheduleOfEightZeroZeroNineAccountPostingProcessComponent', () => {
  let component: ScheduleOfEightZeroZeroNineAccountPostingProcessComponent;
  let fixture: ComponentFixture<ScheduleOfEightZeroZeroNineAccountPostingProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleOfEightZeroZeroNineAccountPostingProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleOfEightZeroZeroNineAccountPostingProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
