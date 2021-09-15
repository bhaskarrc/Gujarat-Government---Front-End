import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchMappingAndTransferListingComponent } from './branch-mapping-and-transfer-listing.component';

describe('BranchMappingAndTransferListingComponent', () => {
  let component: BranchMappingAndTransferListingComponent;
  let fixture: ComponentFixture<BranchMappingAndTransferListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchMappingAndTransferListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchMappingAndTransferListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
