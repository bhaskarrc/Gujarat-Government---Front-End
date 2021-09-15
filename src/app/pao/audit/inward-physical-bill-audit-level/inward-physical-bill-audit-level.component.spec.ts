import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardPhysicalBillAuditLevelComponent } from './inward-physical-bill-audit-level.component';

describe('InwardPhysicalBillAuditLevelComponent', () => {
  let component: InwardPhysicalBillAuditLevelComponent;
  let fixture: ComponentFixture<InwardPhysicalBillAuditLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InwardPhysicalBillAuditLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InwardPhysicalBillAuditLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
