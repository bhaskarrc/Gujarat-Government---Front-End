import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreAuditGpfDistrictEntryComponent } from './pre-audit-gpf-district-entry.component';

describe('PreAuditGpfDistrictEntryComponent', () => {
  let component: PreAuditGpfDistrictEntryComponent;
  let fixture: ComponentFixture<PreAuditGpfDistrictEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreAuditGpfDistrictEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreAuditGpfDistrictEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
