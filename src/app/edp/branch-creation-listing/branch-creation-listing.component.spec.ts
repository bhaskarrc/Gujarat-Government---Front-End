import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchCreationListingComponent } from './branch-creation-listing.component';

describe('BranchCreationListingComponent', () => {
  let component: BranchCreationListingComponent;
  let fixture: ComponentFixture<BranchCreationListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchCreationListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchCreationListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
