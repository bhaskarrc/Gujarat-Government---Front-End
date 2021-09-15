import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingInstituteAuditMasterComponent } from './pending-institute-audit-master.component';

describe('PendingInstituteAuditMasterComponent', () => {
  let component: PendingInstituteAuditMasterComponent;
  let fixture: ComponentFixture<PendingInstituteAuditMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingInstituteAuditMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingInstituteAuditMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
