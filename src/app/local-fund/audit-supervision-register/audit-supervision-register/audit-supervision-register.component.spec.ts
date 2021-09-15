import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditSupervisionRegisterComponent } from './audit-supervision-register.component';

describe('AuditSupervisionRegisterComponent', () => {
  let component: AuditSupervisionRegisterComponent;
  let fixture: ComponentFixture<AuditSupervisionRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditSupervisionRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditSupervisionRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
