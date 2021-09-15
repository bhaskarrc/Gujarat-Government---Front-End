import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditBillsTOComponent } from './audit-bills-to.component';

describe('AuditBillsTOComponent', () => {
  let component: AuditBillsTOComponent;
  let fixture: ComponentFixture<AuditBillsTOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditBillsTOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditBillsTOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
