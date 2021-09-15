import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcpRegisterReportComponent } from './acp-register-report.component';

describe('AcpRegisterReportComponent', () => {
  let component: AcpRegisterReportComponent;
  let fixture: ComponentFixture<AcpRegisterReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcpRegisterReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcpRegisterReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
