import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditPensionCasesAuditorComponent } from './audit-pension-cases-auditor.component';

describe('AuditPensionCasesAuditorComponent', () => {
  let component: AuditPensionCasesAuditorComponent;
  let fixture: ComponentFixture<AuditPensionCasesAuditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditPensionCasesAuditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditPensionCasesAuditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
