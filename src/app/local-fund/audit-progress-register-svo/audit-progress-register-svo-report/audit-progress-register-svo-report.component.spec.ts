import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditProgressRegisterSvoReportComponent } from './audit-progress-register-svo-report.component';

describe('AuditProgressRegisterSvoReportComponent', () => {
  let component: AuditProgressRegisterSvoReportComponent;
  let fixture: ComponentFixture<AuditProgressRegisterSvoReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditProgressRegisterSvoReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditProgressRegisterSvoReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
