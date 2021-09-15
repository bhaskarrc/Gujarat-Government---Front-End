import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGtrThirtyFiveComponent } from './report-gtr-thirty-five.component';

describe('ReportGtrThirtyFiveComponent', () => {
  let component: ReportGtrThirtyFiveComponent;
  let fixture: ComponentFixture<ReportGtrThirtyFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportGtrThirtyFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportGtrThirtyFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
