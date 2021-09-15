import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleNoDialogComponent } from './schedule-no-dialog.component';

describe('ScheduleNoDialogComponent', () => {
  let component: ScheduleNoDialogComponent;
  let fixture: ComponentFixture<ScheduleNoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleNoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleNoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
