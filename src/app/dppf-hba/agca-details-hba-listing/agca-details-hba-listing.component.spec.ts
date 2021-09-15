import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgcaDetailsHbaListingComponent } from './agca-details-hba-listing.component';

describe('AgcaDetailsHbaListingComponent', () => {
  let component: AgcaDetailsHbaListingComponent;
  let fixture: ComponentFixture<AgcaDetailsHbaListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgcaDetailsHbaListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgcaDetailsHbaListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
