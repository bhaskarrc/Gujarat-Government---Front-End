import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundRequestListingAdministratorComponent } from './refund-request-listing-administrator.component';

describe('RefundRequestListingAdministratorComponent', () => {
  let component: RefundRequestListingAdministratorComponent;
  let fixture: ComponentFixture<RefundRequestListingAdministratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundRequestListingAdministratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundRequestListingAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
