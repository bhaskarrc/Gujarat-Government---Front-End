import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreAuditGpfListingComponent } from './pre-audit-gpf-listing.component';

describe('PreAuditGpfListingComponent', () => {
  let component: PreAuditGpfListingComponent;
  let fixture: ComponentFixture<PreAuditGpfListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreAuditGpfListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreAuditGpfListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
