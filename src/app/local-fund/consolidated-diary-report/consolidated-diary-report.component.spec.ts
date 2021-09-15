import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidatedDiaryReportComponent } from './consolidated-diary-report.component';

describe('ConsolidatedDiaryReportComponent', () => {
  let component: ConsolidatedDiaryReportComponent;
  let fixture: ComponentFixture<ConsolidatedDiaryReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolidatedDiaryReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolidatedDiaryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
