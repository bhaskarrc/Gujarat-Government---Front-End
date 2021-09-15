import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditProcessRegisterComponent } from './audit-process-register.component';

describe('AuditProcessRegisterComponent', () => {
  let component: AuditProcessRegisterComponent;
  let fixture: ComponentFixture<AuditProcessRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditProcessRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditProcessRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
