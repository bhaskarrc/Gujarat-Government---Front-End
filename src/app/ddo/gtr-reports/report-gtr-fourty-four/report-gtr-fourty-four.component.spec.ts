import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGtrFourtyFourComponent } from './report-gtr-fourty-four.component';

describe('ReportGtrFourtyFourComponent', () =>  {
  let component: ReportGtrFourtyFourComponent;
  let fixture: ComponentFixture<ReportGtrFourtyFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportGtrFourtyFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportGtrFourtyFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
