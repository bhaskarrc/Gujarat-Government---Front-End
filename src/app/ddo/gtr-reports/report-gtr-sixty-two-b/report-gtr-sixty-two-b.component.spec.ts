import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGtrSixtyTwoBComponent } from './report-gtr-sixty-two-b.component';

describe('ReportGtrSixtyTwoBComponent', () => {
  let component: ReportGtrSixtyTwoBComponent;
  let fixture: ComponentFixture<ReportGtrSixtyTwoBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportGtrSixtyTwoBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportGtrSixtyTwoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
