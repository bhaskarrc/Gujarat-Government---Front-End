import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditBillsAuditorComponent } from './audit-bills-auditor.component';

describe('AuditBillsAuditorComponent', () => {
  let component: AuditBillsAuditorComponent;
  let fixture: ComponentFixture<AuditBillsAuditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditBillsAuditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditBillsAuditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
