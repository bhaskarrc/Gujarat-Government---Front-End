import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreAuditGpfInstituteEntryComponent } from './pre-audit-gpf-institute-entry.component';

describe('PreAuditGpfInstituteEntryComponent', () => {
  let component: PreAuditGpfInstituteEntryComponent;
  let fixture: ComponentFixture<PreAuditGpfInstituteEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreAuditGpfInstituteEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreAuditGpfInstituteEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
