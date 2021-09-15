import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingChargeViewComponent } from './standing-charge-view.component';

describe('StandingChargeViewComponent', () => {
  let component: StandingChargeViewComponent;
  let fixture: ComponentFixture<StandingChargeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandingChargeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingChargeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
