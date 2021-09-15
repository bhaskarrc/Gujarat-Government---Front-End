import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLcAccountListingAgComponent } from './create-lc-account-listing-ag.component';

describe('CreateLcAccountListingAgComponent', () => {
  let component: CreateLcAccountListingAgComponent;
  let fixture: ComponentFixture<CreateLcAccountListingAgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLcAccountListingAgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLcAccountListingAgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
