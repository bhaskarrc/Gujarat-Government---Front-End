import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtiReportRegisterComponent } from './rti-report-register.component';

describe('RtiReportRegisterComponent', () => {
  let component: RtiReportRegisterComponent;
  let fixture: ComponentFixture<RtiReportRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtiReportRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtiReportRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
