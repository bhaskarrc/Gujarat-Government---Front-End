import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtiRegisterListingComponent } from './rti-register-listing.component';

describe('RtiRegisterListingComponent', () => {
  let component: RtiRegisterListingComponent;
  let fixture: ComponentFixture<RtiRegisterListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtiRegisterListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtiRegisterListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
