import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGtrFourtySixComponent } from './report-gtr-fourty-six.component';

describe('ReportGtrFourtySixComponent', () => {
  let component: ReportGtrFourtySixComponent;
  let fixture: ComponentFixture<ReportGtrFourtySixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportGtrFourtySixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportGtrFourtySixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
