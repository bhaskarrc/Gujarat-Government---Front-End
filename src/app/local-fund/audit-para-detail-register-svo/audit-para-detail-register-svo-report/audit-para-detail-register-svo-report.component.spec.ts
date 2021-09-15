import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditParaDetailRegisterSvoReportComponent } from './audit-para-detail-register-svo-report.component';

describe('AuditParaDetailRegisterSvoReportComponent', () => {
  let component: AuditParaDetailRegisterSvoReportComponent;
  let fixture: ComponentFixture<AuditParaDetailRegisterSvoReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditParaDetailRegisterSvoReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditParaDetailRegisterSvoReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
