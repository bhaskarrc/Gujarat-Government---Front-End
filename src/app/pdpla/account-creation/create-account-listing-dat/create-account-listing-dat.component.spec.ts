import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountListingDatComponent } from './create-account-listing-dat.component';

describe('CreateAccountListingDatComponent', () => {
  let component: CreateAccountListingDatComponent;
  let fixture: ComponentFixture<CreateAccountListingDatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountListingDatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountListingDatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
