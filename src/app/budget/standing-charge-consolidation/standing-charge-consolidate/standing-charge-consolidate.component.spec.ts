import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingChargeConsolidateComponent } from './standing-charge-consolidate.component';

describe('StandingChargeConsolidateComponent', () => {
  let component: StandingChargeConsolidateComponent;
  let fixture: ComponentFixture<StandingChargeConsolidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandingChargeConsolidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingChargeConsolidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
