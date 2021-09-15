import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGtrEightyThreeComponent } from './report-gtr-eighty-three.component';

describe('ReportGtrEightyThreeComponent', () => {
  let component: ReportGtrEightyThreeComponent;
  let fixture: ComponentFixture<ReportGtrEightyThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportGtrEightyThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportGtrEightyThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
