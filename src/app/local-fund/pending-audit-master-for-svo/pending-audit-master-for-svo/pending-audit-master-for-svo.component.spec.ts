import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingAuditMasterForSvoComponent } from './pending-audit-master-for-svo.component';

describe('PendingAuditMasterForSvoComponent', () => {
  let component: PendingAuditMasterForSvoComponent;
  let fixture: ComponentFixture<PendingAuditMasterForSvoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingAuditMasterForSvoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingAuditMasterForSvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
