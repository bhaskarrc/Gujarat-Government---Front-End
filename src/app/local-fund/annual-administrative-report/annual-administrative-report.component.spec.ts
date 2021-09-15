import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualAdministrativeReportComponent } from './annual-administrative-report.component';

describe('AnnualAdministrativeReportComponent', () => {
  let component: AnnualAdministrativeReportComponent;
  let fixture: ComponentFixture<AnnualAdministrativeReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualAdministrativeReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualAdministrativeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
