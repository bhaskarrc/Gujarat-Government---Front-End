import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingCasesForRemovalAtHqRegisterReportComponent } from './pending-cases-for-removal-at-hq-register-report.component';

describe('PendingCasesForRemovalAtHqRegisterReportComponent', () => {
  let component: PendingCasesForRemovalAtHqRegisterReportComponent;
  let fixture: ComponentFixture<PendingCasesForRemovalAtHqRegisterReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingCasesForRemovalAtHqRegisterReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingCasesForRemovalAtHqRegisterReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
