import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountListingAdminComponent } from './create-account-listing-admin.component';

describe('CreateAccountListingAdminComponent', () => {
  let component: CreateAccountListingAdminComponent;
  let fixture: ComponentFixture<CreateAccountListingAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountListingAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountListingAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
