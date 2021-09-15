import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiInterestRateComponent } from './gi-interest-rate.component';

describe('GiInterestRateComponent', () => {
  let component: GiInterestRateComponent;
  let fixture: ComponentFixture<GiInterestRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiInterestRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiInterestRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
