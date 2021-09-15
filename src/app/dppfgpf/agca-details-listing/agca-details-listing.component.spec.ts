import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgcaDetailsListingComponent } from './agca-details-listing.component';

describe('AgcaDetailsListingComponent', () => {
  let component: AgcaDetailsListingComponent;
  let fixture: ComponentFixture<AgcaDetailsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgcaDetailsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgcaDetailsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
