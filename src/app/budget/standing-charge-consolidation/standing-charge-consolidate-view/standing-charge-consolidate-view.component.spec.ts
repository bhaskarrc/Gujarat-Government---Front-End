import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingChargeConsolidateViewComponent } from './standing-charge-consolidate-view.component';

describe('StandingChargeConsolidateViewComponent', () => {
  let component: StandingChargeConsolidateViewComponent;
  let fixture: ComponentFixture<StandingChargeConsolidateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandingChargeConsolidateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingChargeConsolidateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
