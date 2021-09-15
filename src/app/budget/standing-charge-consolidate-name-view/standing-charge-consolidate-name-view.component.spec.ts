import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingChargeConsolidateNameViewComponent } from './standing-charge-consolidate-name-view.component';

describe('StandingChargeConsolidateNameViewComponent', () => {
  let component: StandingChargeConsolidateNameViewComponent;
  let fixture: ComponentFixture<StandingChargeConsolidateNameViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandingChargeConsolidateNameViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingChargeConsolidateNameViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
