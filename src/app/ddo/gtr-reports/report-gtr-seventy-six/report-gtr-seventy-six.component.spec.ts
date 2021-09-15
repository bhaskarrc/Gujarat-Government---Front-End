import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGtrSeventySixComponent } from './report-gtr-seventy-six.component';

describe('ReportGtrSeventySixComponent', () => {
  let component: ReportGtrSeventySixComponent;
  let fixture: ComponentFixture<ReportGtrSeventySixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportGtrSeventySixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportGtrSeventySixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
