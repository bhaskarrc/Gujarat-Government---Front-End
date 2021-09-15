import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtsAccountMappingListingComponent } from './cts-account-mapping-listing.component';

describe('CtsAccountMappingListingComponent', () => {
  let component: CtsAccountMappingListingComponent;
  let fixture: ComponentFixture<CtsAccountMappingListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtsAccountMappingListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtsAccountMappingListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
