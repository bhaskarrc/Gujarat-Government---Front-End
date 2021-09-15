import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsInwardTopScheduleComponent } from './nps-inward-top-schedule.component';

describe('NpsInwardTopScheduleComponent', () => {
  let component: NpsInwardTopScheduleComponent;
  let fixture: ComponentFixture<NpsInwardTopScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsInwardTopScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsInwardTopScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
