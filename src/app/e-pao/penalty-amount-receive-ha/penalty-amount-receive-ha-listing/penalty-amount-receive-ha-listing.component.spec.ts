import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltyAmountReceiveHaListingComponent } from './penalty-amount-receive-ha-listing.component';

describe('PenaltyAmountReceiveHaListingComponent', () => {
  let component: PenaltyAmountReceiveHaListingComponent;
  let fixture: ComponentFixture<PenaltyAmountReceiveHaListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenaltyAmountReceiveHaListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaltyAmountReceiveHaListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
