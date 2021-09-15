import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopScheduleEntryComponent } from './top-schedule-entry.component';

describe('TopScheduleEntryComponent', () => {
  let component: TopScheduleEntryComponent;
  let fixture: ComponentFixture<TopScheduleEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopScheduleEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopScheduleEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
