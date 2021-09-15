import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGtrFourtyFiveComponent } from './report-gtr-fourty-five.component';

describe('ReportGtrFourtyFiveComponent', () => {
  let component: ReportGtrFourtyFiveComponent;
  let fixture: ComponentFixture<ReportGtrFourtyFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportGtrFourtyFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportGtrFourtyFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
