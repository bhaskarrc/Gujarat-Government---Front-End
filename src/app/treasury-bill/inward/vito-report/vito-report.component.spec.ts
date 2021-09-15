import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitoReportComponent } from './vito-report.component';

describe('VitoReportComponent', () => {
  let component: VitoReportComponent;
  let fixture: ComponentFixture<VitoReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitoReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitoReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
