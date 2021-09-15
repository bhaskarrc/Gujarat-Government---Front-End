import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleEntryHbaComponent } from './schedule-entry-hba.component';

describe('ScheduleEntryHbaComponent', () => {
  let component: ScheduleEntryHbaComponent;
  let fixture: ComponentFixture<ScheduleEntryHbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleEntryHbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleEntryHbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
