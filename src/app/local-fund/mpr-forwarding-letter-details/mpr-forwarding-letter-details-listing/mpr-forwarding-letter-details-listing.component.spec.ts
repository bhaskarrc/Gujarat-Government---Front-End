import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MprForwardingLetterDetailsListingComponent } from './mpr-forwarding-letter-details-listing.component';

describe('MprForwardingLetterDetailsListingComponent', () => {
  let component: MprForwardingLetterDetailsListingComponent;
  let fixture: ComponentFixture<MprForwardingLetterDetailsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MprForwardingLetterDetailsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MprForwardingLetterDetailsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
