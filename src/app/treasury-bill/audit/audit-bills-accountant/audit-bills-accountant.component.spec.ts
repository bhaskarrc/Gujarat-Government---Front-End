import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditBillsAccountantComponent } from './audit-bills-accountant.component';

describe('AuditBillsAccountantComponent', () => {
  let component: AuditBillsAccountantComponent;
  let fixture: ComponentFixture<AuditBillsAccountantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditBillsAccountantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditBillsAccountantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
