import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsScheduleEntryComponent } from './nps-schedule-entry.component';

describe('NpsScheduleEntryComponent', () => {
  let component: NpsScheduleEntryComponent;
  let fixture: ComponentFixture<NpsScheduleEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsScheduleEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsScheduleEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
