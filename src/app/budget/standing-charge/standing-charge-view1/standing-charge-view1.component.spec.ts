import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingChargeView1Component } from './standing-charge-view1.component';

describe('StandingChargeView1Component', () => {
  let component: StandingChargeView1Component;
  let fixture: ComponentFixture<StandingChargeView1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandingChargeView1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingChargeView1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
