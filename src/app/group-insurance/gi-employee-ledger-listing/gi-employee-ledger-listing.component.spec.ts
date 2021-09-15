import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiEmployeeLedgerListingComponent } from './gi-employee-ledger-listing.component';

describe('GiEmployeeLedgerListingComponent', () => {
  let component: GiEmployeeLedgerListingComponent;
  let fixture: ComponentFixture<GiEmployeeLedgerListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiEmployeeLedgerListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiEmployeeLedgerListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
