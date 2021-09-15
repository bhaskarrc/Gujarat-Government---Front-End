import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtiVigilanceBranchListingComponent } from './rti-vigilance-branch-listing.component';

describe('RtiVigilanceBranchListingComponent', () => {
  let component: RtiVigilanceBranchListingComponent;
  let fixture: ComponentFixture<RtiVigilanceBranchListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtiVigilanceBranchListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtiVigilanceBranchListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
