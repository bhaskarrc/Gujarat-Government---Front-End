import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreezeUnfreezeScheduleComponent } from './freeze-unfreeze-schedule.component';

describe('FreezeUnfreezeScheduleComponent', () => {
  let component: FreezeUnfreezeScheduleComponent;
  let fixture: ComponentFixture<FreezeUnfreezeScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreezeUnfreezeScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreezeUnfreezeScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
