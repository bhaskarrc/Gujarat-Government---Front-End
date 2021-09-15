import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HodAuditPlanningComponent } from './hod-audit-planning.component';

describe('HodAuditPlanningComponent', () => {
  let component: HodAuditPlanningComponent;
  let fixture: ComponentFixture<HodAuditPlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HodAuditPlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HodAuditPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
