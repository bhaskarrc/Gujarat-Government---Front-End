import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardRegisterReportComponent } from './outward-register-report.component';

describe('OutwardRegisterReportComponent', () => {
  let component: OutwardRegisterReportComponent;
  let fixture: ComponentFixture<OutwardRegisterReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwardRegisterReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwardRegisterReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
