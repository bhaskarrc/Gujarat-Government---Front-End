import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiTreasuryOfficeReportComponent } from './gi-treasury-office-report.component';

describe('GiTreasuryOfficeReportComponent', () => {
  let component: GiTreasuryOfficeReportComponent;
  let fixture: ComponentFixture<GiTreasuryOfficeReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiTreasuryOfficeReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiTreasuryOfficeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
