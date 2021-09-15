import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditPensionCasesAtoToComponent } from './audit-pension-cases-ato-to.component';

describe('AuditPensionCasesAtoToComponent', () => {
  let component: AuditPensionCasesAtoToComponent;
  let fixture: ComponentFixture<AuditPensionCasesAtoToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditPensionCasesAtoToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditPensionCasesAtoToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
