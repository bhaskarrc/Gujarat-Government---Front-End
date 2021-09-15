import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankRateMasterAoListingComponent } from './bank-rate-master-ao-listing.component';

describe('BankRateMasterAoListingComponent', () => {
  let component: BankRateMasterAoListingComponent;
  let fixture: ComponentFixture<BankRateMasterAoListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankRateMasterAoListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankRateMasterAoListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
