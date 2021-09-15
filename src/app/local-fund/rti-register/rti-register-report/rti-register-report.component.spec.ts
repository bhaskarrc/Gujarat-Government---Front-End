import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtiRegisterReportComponent } from './rti-register-report.component';

describe('RtiRegisterReportComponent', () => {
  let component: RtiRegisterReportComponent;
  let fixture: ComponentFixture<RtiRegisterReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtiRegisterReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtiRegisterReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
