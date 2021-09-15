import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleFourReportComponent } from './schedule-four-report.component';

describe('ScheduleFourReportComponent', () => {
  let component: ScheduleFourReportComponent;
  let fixture: ComponentFixture<ScheduleFourReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleFourReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleFourReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
