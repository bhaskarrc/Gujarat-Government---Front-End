import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsAccountGenerationDetailsListingComponent } from './nps-account-generation-details-listing.component';

describe('NpsAccountGenerationDetailsListingComponent', () => {
  let component: NpsAccountGenerationDetailsListingComponent;
  let fixture: ComponentFixture<NpsAccountGenerationDetailsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsAccountGenerationDetailsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsAccountGenerationDetailsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
