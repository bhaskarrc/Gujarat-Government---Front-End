import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditBillsATOComponent } from './audit-bills-ato.component';

describe('AuditBillsATOComponent', () => {
  let component: AuditBillsATOComponent;
  let fixture: ComponentFixture<AuditBillsATOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditBillsATOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditBillsATOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
