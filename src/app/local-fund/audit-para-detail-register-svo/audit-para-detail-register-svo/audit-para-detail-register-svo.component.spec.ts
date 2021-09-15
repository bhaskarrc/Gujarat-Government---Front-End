import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditParaDetailRegisterSvoComponent } from './audit-para-detail-register-svo.component';

describe('AuditParaDetailRegisterSvoComponent', () => {
  let component: AuditParaDetailRegisterSvoComponent;
  let fixture: ComponentFixture<AuditParaDetailRegisterSvoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditParaDetailRegisterSvoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditParaDetailRegisterSvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
