import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreAuditGpfDistrictListingComponent } from './pre-audit-gpf-district-listing.component';

describe('PreAuditGpfDistrictListingComponent', () => {
  let component: PreAuditGpfDistrictListingComponent;
  let fixture: ComponentFixture<PreAuditGpfDistrictListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreAuditGpfDistrictListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreAuditGpfDistrictListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
