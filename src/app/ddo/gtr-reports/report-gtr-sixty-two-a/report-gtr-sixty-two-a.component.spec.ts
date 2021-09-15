import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGtrSixtyTwoAComponent } from './report-gtr-sixty-two-a.component';

describe('ReportGtrSixtyTwoAComponent', () => {
  let component: ReportGtrSixtyTwoAComponent;
  let fixture: ComponentFixture<ReportGtrSixtyTwoAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportGtrSixtyTwoAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportGtrSixtyTwoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
