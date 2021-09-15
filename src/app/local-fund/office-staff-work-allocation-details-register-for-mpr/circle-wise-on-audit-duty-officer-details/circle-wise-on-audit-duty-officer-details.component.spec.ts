import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleWiseOnAuditDutyOfficerDetailsComponent } from './circle-wise-on-audit-duty-officer-details.component';

describe('CircleWiseOnAuditDutyOfficerDetailsComponent', () => {
  let component: CircleWiseOnAuditDutyOfficerDetailsComponent;
  let fixture: ComponentFixture<CircleWiseOnAuditDutyOfficerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleWiseOnAuditDutyOfficerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleWiseOnAuditDutyOfficerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
