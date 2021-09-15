import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGtrSeventyNineComponent } from './report-gtr-seventy-nine.component';

describe('ReportGtrSeventyNineComponent', () => {
  let component: ReportGtrSeventyNineComponent;
  let fixture: ComponentFixture<ReportGtrSeventyNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportGtrSeventyNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportGtrSeventyNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
