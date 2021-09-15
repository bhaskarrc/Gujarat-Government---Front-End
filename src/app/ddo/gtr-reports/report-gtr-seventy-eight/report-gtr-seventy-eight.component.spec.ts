import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGtrSeventyEightComponent } from './report-gtr-seventy-eight.component';

describe('ReportGtrSeventyEightComponent', () => {
  let component: ReportGtrSeventyEightComponent;
  let fixture: ComponentFixture<ReportGtrSeventyEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportGtrSeventyEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportGtrSeventyEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
