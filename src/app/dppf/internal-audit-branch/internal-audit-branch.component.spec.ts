import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalAuditBranchComponent } from './internal-audit-branch.component';

describe('InternalAuditBranchComponent', () => {
  let component: InternalAuditBranchComponent;
  let fixture: ComponentFixture<InternalAuditBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalAuditBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalAuditBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
