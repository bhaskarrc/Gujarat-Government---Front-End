import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditorBankBranchMappingComponent } from './auditor-bank-branch-mapping.component';

describe('AuditorBankBranchMappingComponent', () => {
  let component: AuditorBankBranchMappingComponent;
  let fixture: ComponentFixture<AuditorBankBranchMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditorBankBranchMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditorBankBranchMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
