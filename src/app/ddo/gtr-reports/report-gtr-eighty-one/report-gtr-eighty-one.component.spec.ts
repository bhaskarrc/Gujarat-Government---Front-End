import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGtrEightyOneComponent } from './report-gtr-eighty-one.component';

describe('ReportGtrEightyOneComponent', () => {
  let component: ReportGtrEightyOneComponent;
  let fixture: ComponentFixture<ReportGtrEightyOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportGtrEightyOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportGtrEightyOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
