import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGtrSrComponent } from './report-gtr-sr.component';

describe('ReportGtrSrComponent', () => {
  let component: ReportGtrSrComponent;
  let fixture: ComponentFixture<ReportGtrSrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportGtrSrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportGtrSrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
