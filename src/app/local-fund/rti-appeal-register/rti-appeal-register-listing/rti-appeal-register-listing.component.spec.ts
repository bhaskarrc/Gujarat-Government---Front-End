import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtiAppealRegisterListingComponent } from './rti-appeal-register-listing.component';

describe('RtiAppealRegisterListingComponent', () => {
  let component: RtiAppealRegisterListingComponent;
  let fixture: ComponentFixture<RtiAppealRegisterListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtiAppealRegisterListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtiAppealRegisterListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
