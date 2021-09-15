import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditParaRegisterComponent } from './audit-para-register.component';

describe('AuditParaRegisterComponent', () => {
  let component: AuditParaRegisterComponent;
  let fixture: ComponentFixture<AuditParaRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditParaRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditParaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
