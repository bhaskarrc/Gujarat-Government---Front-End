import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGtrSeventySevenComponent } from './report-gtr-seventy-seven.component';

describe('ReportGtrSeventySevenComponent', () => {
  let component: ReportGtrSeventySevenComponent;
  let fixture: ComponentFixture<ReportGtrSeventySevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportGtrSeventySevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportGtrSeventySevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
