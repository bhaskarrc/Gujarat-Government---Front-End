import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountListingAgComponent } from './create-account-listing-ag.component';

describe('CreateAccountListingAgComponent', () => {
  let component: CreateAccountListingAgComponent;
  let fixture: ComponentFixture<CreateAccountListingAgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountListingAgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountListingAgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
