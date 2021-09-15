import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampRegisterReportComponent } from './stamp-register-report.component';

describe('StampRegisterReportComponent', () => {
  let component: StampRegisterReportComponent;
  let fixture: ComponentFixture<StampRegisterReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampRegisterReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampRegisterReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
