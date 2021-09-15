import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltyAmountReceiveAoListingComponent } from './penalty-amount-receive-ao-listing.component';

describe('PenaltyAmountReceiveAoListingComponent', () => {
  let component: PenaltyAmountReceiveAoListingComponent;
  let fixture: ComponentFixture<PenaltyAmountReceiveAoListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenaltyAmountReceiveAoListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaltyAmountReceiveAoListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
