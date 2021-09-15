import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGtrTwentyNineComponent } from './report-gtr-twenty-nine.component';

describe('ReportGtrTwentyNineComponent', () => {
  let component: ReportGtrTwentyNineComponent;
  let fixture: ComponentFixture<ReportGtrTwentyNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportGtrTwentyNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportGtrTwentyNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
