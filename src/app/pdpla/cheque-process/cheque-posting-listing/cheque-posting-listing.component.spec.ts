import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequePostingListingComponent } from './cheque-posting-listing.component';

describe('ChequePostingListingComponent', () => {
  let component: ChequePostingListingComponent;
  let fixture: ComponentFixture<ChequePostingListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequePostingListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequePostingListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
