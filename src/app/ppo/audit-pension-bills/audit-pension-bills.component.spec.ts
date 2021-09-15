import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditPensionBillsComponent } from './audit-pension-bills.component';

describe('AuditPensionBillsComponent', () => {
  let component: AuditPensionBillsComponent;
  let fixture: ComponentFixture<AuditPensionBillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditPensionBillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditPensionBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
