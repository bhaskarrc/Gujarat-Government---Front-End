import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleFiveReportComponent } from './schedule-five-report.component';

describe('ScheduleFiveReportComponent', () => {
  let component: ScheduleFiveReportComponent;
  let fixture: ComponentFixture<ScheduleFiveReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleFiveReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleFiveReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
