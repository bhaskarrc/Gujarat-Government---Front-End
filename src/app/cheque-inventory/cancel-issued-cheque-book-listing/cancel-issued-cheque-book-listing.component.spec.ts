import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelIssuedChequeBookListingComponent } from './cancel-issued-cheque-book-listing.component';

describe('CancelIssuedChequeBookListingComponent', () => {
  let component: CancelIssuedChequeBookListingComponent;
  let fixture: ComponentFixture<CancelIssuedChequeBookListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelIssuedChequeBookListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelIssuedChequeBookListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
