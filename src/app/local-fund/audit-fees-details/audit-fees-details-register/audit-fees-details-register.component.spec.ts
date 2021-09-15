import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditFeesDetailsRegisterComponent } from './audit-fees-details-register.component';

describe('AuditFeesDetailsRegisterComponent', () => {
  let component: AuditFeesDetailsRegisterComponent;
  let fixture: ComponentFixture<AuditFeesDetailsRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditFeesDetailsRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditFeesDetailsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
