import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankRateMasterHaListingComponent } from './bank-rate-master-ha-listing.component';

describe('BankRateMasterHaListingComponent', () => {
  let component: BankRateMasterHaListingComponent;
  let fixture: ComponentFixture<BankRateMasterHaListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankRateMasterHaListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankRateMasterHaListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
