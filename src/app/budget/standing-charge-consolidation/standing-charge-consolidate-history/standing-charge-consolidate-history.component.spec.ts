import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingChargeConsolidateHistoryComponent } from './standing-charge-consolidate-history.component';

describe('StandingChargeConsolidateHistoryComponent', () => {
  let component: StandingChargeConsolidateHistoryComponent;
  let fixture: ComponentFixture<StandingChargeConsolidateHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandingChargeConsolidateHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingChargeConsolidateHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
