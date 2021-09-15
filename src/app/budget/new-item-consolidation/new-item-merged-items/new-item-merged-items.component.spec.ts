import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingChargeHistoryComponent } from './standing-charge-history.component';

describe('StandingChargeHistoryComponent', () => {
  let component: StandingChargeHistoryComponent;
  let fixture: ComponentFixture<StandingChargeHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandingChargeHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingChargeHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
