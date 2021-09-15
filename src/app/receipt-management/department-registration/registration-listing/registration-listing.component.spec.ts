import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationListingComponent } from './registration-listing.component';

describe('RegistrationListingComponent', () => {
  let component: RegistrationListingComponent;
  let fixture: ComponentFixture<RegistrationListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
