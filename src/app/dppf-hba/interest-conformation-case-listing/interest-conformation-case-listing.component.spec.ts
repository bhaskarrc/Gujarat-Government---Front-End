import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestConformationCaseListingComponent } from './interest-conformation-case-listing.component';

describe('InterestConformationCaseListingComponent', () => {
  let component: InterestConformationCaseListingComponent;
  let fixture: ComponentFixture<InterestConformationCaseListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestConformationCaseListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestConformationCaseListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
