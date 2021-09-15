import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreezeUnfreezScheduleHbaComponent } from './freeze-unfreez-schedule-hba.component';

describe('FreezeUnfreezScheduleHbaComponent', () => {
  let component: FreezeUnfreezScheduleHbaComponent;
  let fixture: ComponentFixture<FreezeUnfreezScheduleHbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreezeUnfreezScheduleHbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreezeUnfreezScheduleHbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
