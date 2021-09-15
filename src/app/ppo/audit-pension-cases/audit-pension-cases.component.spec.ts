import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditPensionCasesComponent } from './audit-pension-cases.component';

describe('AuditPensionCasesComponent', () => {
  let component: AuditPensionCasesComponent;
  let fixture: ComponentFixture<AuditPensionCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditPensionCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditPensionCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
