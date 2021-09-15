import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionPreAuditCasesRegisterDetailsComponent } from './pension-pre-audit-cases-register-details.component';

describe('PensionPreAuditCasesRegisterDetailsComponent', () => {
  let component: PensionPreAuditCasesRegisterDetailsComponent;
  let fixture: ComponentFixture<PensionPreAuditCasesRegisterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PensionPreAuditCasesRegisterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionPreAuditCasesRegisterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
