import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingChargeConsolidationListComponent } from './standing-charge-consolidation-list.component';

describe('StandingChargeConsolidationListComponent', () => {
  let component: StandingChargeConsolidationListComponent;
  let fixture: ComponentFixture<StandingChargeConsolidationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandingChargeConsolidationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingChargeConsolidationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
