import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NdcReportComponent } from './ndc-report.component';

describe('NdcReportComponent', () => {
  let component: NdcReportComponent;
  let fixture: ComponentFixture<NdcReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdcReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NdcReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
