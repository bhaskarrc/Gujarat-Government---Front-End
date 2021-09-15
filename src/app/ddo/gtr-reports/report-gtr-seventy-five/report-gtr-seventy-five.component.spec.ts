import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGtrSeventyFiveComponent } from './report-gtr-seventy-five.component';

describe('ReportGtrSeventyFiveComponent', () => {
  let component: ReportGtrSeventyFiveComponent;
  let fixture: ComponentFixture<ReportGtrSeventyFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportGtrSeventyFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportGtrSeventyFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
