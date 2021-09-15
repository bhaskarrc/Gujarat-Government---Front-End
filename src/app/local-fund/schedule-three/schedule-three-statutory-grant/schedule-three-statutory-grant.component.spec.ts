import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleThreeComponent } from './schedule-three-statutory-grant.component';

describe('ScheduleThreeComponent', () => {
  let component: ScheduleThreeComponent;
  let fixture: ComponentFixture<ScheduleThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
