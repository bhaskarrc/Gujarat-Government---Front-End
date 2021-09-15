import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGtrSrOfficeOrderComponent } from './report-gtr-sr-office-order.component';

describe('ReportGtrSrOfficeOrderComponent', () => {
  let component: ReportGtrSrOfficeOrderComponent;
  let fixture: ComponentFixture<ReportGtrSrOfficeOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportGtrSrOfficeOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportGtrSrOfficeOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
