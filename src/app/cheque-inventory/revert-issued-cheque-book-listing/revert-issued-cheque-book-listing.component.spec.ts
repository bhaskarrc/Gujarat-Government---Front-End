import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevertIssuedChequeBookListingComponent } from './revert-issued-cheque-book-listing.component';

describe('RevertIssuedChequeBookListingComponent', () => {
  let component: RevertIssuedChequeBookListingComponent;
  let fixture: ComponentFixture<RevertIssuedChequeBookListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevertIssuedChequeBookListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevertIssuedChequeBookListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
