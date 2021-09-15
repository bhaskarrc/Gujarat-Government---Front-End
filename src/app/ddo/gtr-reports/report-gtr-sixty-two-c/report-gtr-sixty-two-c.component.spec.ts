import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGtrSixtyTwoCComponent } from './report-gtr-sixty-two-c.component';

describe('ReportGtrSixtyTwoCComponent', () => {
  let component: ReportGtrSixtyTwoCComponent;
  let fixture: ComponentFixture<ReportGtrSixtyTwoCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportGtrSixtyTwoCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportGtrSixtyTwoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
