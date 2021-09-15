import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountListingFdComponent } from './create-account-listing-fd.component';

describe('CreateAccountListingFdComponent', () => {
  let component: CreateAccountListingFdComponent;
  let fixture: ComponentFixture<CreateAccountListingFdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountListingFdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountListingFdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
