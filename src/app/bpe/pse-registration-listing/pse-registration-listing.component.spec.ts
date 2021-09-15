import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PseRegistrationListingComponent } from './pse-registration-listing.component';

describe('PseRegistrationListingComponent', () => {
  let component: PseRegistrationListingComponent;
  let fixture: ComponentFixture<PseRegistrationListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PseRegistrationListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PseRegistrationListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
