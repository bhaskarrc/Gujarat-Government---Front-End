import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCertificateReportComponent } from './life-certificate-report.component';

describe('LifeCertificateReportComponent', () => {
  let component: LifeCertificateReportComponent;
  let fixture: ComponentFixture<LifeCertificateReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeCertificateReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCertificateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
