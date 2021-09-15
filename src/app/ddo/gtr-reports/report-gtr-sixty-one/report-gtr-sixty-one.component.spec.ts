import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGtrSixtyOneComponent } from './report-gtr-sixty-one.component';

describe('ReportGtrSixtyOneComponent', () => {
  let component: ReportGtrSixtyOneComponent;
  let fixture: ComponentFixture<ReportGtrSixtyOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportGtrSixtyOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportGtrSixtyOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
