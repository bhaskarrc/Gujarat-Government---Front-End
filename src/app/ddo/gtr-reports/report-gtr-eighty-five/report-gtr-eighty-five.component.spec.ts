import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGtrEightyFiveComponent } from './report-gtr-eighty-five.component';

describe('ReportGtrEightyFiveComponent', () => {
  let component: ReportGtrEightyFiveComponent;
  let fixture: ComponentFixture<ReportGtrEightyFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportGtrEightyFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportGtrEightyFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
