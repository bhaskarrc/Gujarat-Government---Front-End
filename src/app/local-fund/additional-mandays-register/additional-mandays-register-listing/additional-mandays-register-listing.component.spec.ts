import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalMandaysRegisterListingComponent } from './additional-mandays-register-listing.component';

describe('AdditionalMandaysRegisterListingComponent', () => {
  let component: AdditionalMandaysRegisterListingComponent;
  let fixture: ComponentFixture<AdditionalMandaysRegisterListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalMandaysRegisterListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalMandaysRegisterListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
