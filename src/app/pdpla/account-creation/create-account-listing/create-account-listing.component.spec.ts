import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountListingComponent } from './create-account-listing.component';

describe('CreateAccountListingComponent', () => {
  let component: CreateAccountListingComponent;
  let fixture: ComponentFixture<CreateAccountListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
