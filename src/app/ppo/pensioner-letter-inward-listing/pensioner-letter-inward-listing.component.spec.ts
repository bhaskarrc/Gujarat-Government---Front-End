import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionerLetterInwardListingComponent } from './pensioner-letter-inward-listing.component';

describe('PensionerLetterInwardListingComponent', () => {
  let component: PensionerLetterInwardListingComponent;
  let fixture: ComponentFixture<PensionerLetterInwardListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PensionerLetterInwardListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionerLetterInwardListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
