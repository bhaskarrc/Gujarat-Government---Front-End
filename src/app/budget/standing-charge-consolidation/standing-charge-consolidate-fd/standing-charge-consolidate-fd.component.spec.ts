import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingChargeConsolidateFdComponent } from './standing-charge-consolidate-fd.component';

describe('StandingChargeConsolidateFdComponent', () => {
  let component: StandingChargeConsolidateFdComponent;
  let fixture: ComponentFixture<StandingChargeConsolidateFdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandingChargeConsolidateFdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingChargeConsolidateFdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
