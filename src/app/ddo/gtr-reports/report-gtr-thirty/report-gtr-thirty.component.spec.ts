import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGtrThirtyComponent } from './report-gtr-thirty.component';

describe('ReportGtrThirtyComponent', () => {
  let component: ReportGtrThirtyComponent;
  let fixture: ComponentFixture<ReportGtrThirtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportGtrThirtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportGtrThirtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
