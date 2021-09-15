import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditBillsApprovedRejectComponent } from './audit-bills-approved-reject.component';

describe('AuditBillsApprovedRejectComponent', () => {
  let component: AuditBillsApprovedRejectComponent;
  let fixture: ComponentFixture<AuditBillsApprovedRejectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditBillsApprovedRejectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditBillsApprovedRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
