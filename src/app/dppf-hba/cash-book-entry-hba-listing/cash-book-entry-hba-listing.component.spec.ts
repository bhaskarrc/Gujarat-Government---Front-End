import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashBookEntryHbaListingComponent } from './cash-book-entry-hba-listing.component';

describe('CashBookEntryHbaListingComponent', () => {
  let component: CashBookEntryHbaListingComponent;
  let fixture: ComponentFixture<CashBookEntryHbaListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashBookEntryHbaListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashBookEntryHbaListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
