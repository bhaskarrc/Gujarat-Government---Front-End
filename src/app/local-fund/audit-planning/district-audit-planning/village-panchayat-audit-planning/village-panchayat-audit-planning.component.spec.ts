import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagePanchayatAuditPlanningComponent } from './village-panchayat-audit-planning.component';

describe('VillagePanchayatAuditPlanningComponent', () => {
  let component: VillagePanchayatAuditPlanningComponent;
  let fixture: ComponentFixture<VillagePanchayatAuditPlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillagePanchayatAuditPlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagePanchayatAuditPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
