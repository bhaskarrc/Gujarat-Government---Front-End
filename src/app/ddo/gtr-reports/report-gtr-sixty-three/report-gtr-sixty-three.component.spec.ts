import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGtrSixtyThreeComponent } from './report-gtr-sixty-three.component';

describe('ReportGtrSixtyThreeComponent', () => {
  let component: ReportGtrSixtyThreeComponent;
  let fixture: ComponentFixture<ReportGtrSixtyThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportGtrSixtyThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportGtrSixtyThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
