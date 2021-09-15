import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingAuditMasterForSvoReportComponent } from './pending-audit-master-for-svo-report.component';

describe('PendingAuditMasterForSvoReportComponent', () => {
  let component: PendingAuditMasterForSvoReportComponent;
  let fixture: ComponentFixture<PendingAuditMasterForSvoReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingAuditMasterForSvoReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingAuditMasterForSvoReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
