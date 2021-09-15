import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiEmployeeLedgerAisListingComponent } from './gi-employee-ledger-ais-listing.component';

describe('GiEmployeeLedgerAisListingComponent', () => {
  let component: GiEmployeeLedgerAisListingComponent;
  let fixture: ComponentFixture<GiEmployeeLedgerAisListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiEmployeeLedgerAisListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiEmployeeLedgerAisListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
