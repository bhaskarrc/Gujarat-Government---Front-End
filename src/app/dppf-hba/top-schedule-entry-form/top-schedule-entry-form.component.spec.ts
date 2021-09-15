import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopScheduleEntryFormComponent } from './top-schedule-entry-form.component';

describe('TopScheduleEntryFormComponent', () => {
  let component: TopScheduleEntryFormComponent;
  let fixture: ComponentFixture<TopScheduleEntryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopScheduleEntryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopScheduleEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
