import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGtrCfrComponent } from './report-gtr-cfr.component';

describe('ReportGtrCfrComponent', () => {
  let component: ReportGtrCfrComponent;
  let fixture: ComponentFixture<ReportGtrCfrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportGtrCfrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportGtrCfrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
