import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictAuditPlanningComponent } from './district-audit-planning.component';

describe('DistrictAuditPlanningComponent', () => {
  let component: DistrictAuditPlanningComponent;
  let fixture: ComponentFixture<DistrictAuditPlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictAuditPlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictAuditPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
