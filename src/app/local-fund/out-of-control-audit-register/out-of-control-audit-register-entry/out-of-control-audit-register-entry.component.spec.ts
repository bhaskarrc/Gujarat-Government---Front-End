import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutOfControlAuditRegisterEntryComponent } from './out-of-control-audit-register-entry.component';

describe('OutOfControlAuditRegisterEntryComponent', () => {
  let component: OutOfControlAuditRegisterEntryComponent;
  let fixture: ComponentFixture<OutOfControlAuditRegisterEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutOfControlAuditRegisterEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutOfControlAuditRegisterEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
