import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisposalOfPendingAuditParaComponent } from './disposal-of-pending-audit-para.component';

describe('DisposalOfPendingAuditParaComponent', () => {
  let component: DisposalOfPendingAuditParaComponent;
  let fixture: ComponentFixture<DisposalOfPendingAuditParaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisposalOfPendingAuditParaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisposalOfPendingAuditParaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
