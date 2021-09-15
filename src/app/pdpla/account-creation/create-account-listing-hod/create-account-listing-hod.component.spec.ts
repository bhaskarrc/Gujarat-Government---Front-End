import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountListingHodComponent } from './create-account-listing-hod.component';

describe('CreateAccountListingHodComponent', () => {
  let component: CreateAccountListingHodComponent;
  let fixture: ComponentFixture<CreateAccountListingHodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountListingHodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountListingHodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
