import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InoperativeAcAsOnDateComponent } from './inoperative-ac-as-on-date.component';

describe('InoperativeAcAsOnDateComponent', () => {
  let component: InoperativeAcAsOnDateComponent;
  let fixture: ComponentFixture<InoperativeAcAsOnDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InoperativeAcAsOnDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InoperativeAcAsOnDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
