import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditProgressRegisterSvoComponent } from './audit-progress-register-svo.component';

describe('AuditProgressRegisterSvoComponent', () => {
  let component: AuditProgressRegisterSvoComponent;
  let fixture: ComponentFixture<AuditProgressRegisterSvoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditProgressRegisterSvoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditProgressRegisterSvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
